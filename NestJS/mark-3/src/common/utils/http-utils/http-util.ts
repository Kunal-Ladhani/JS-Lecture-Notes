import { HttpService } from "@nestjs/axios";
import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { catchError, firstValueFrom } from "rxjs";
import httpContext from "express-http-context";
import _ from "lodash";

import { logger } from "../logger";
import { ADDITIONAL_HEADERS } from "../../constants";

interface IHttpReq {
  get: (url: string, addConfig?: Record<string, any>) => any;
  post: (url: string, data: any, addConfig?: Record<string, any>) => any;
  put: (url: string, data: any, addConfig?: Record<string, any>) => any;
  patch: (url: string, data: any, addConfig?: Record<string, any>) => any;
}

@Injectable()
export class HttpUtil {
  constructor(private httpService: HttpService) {}

  private reqHeaders(headers: any, isExternal = false): Record<string, any> {
    if (isExternal) {
      return headers;
    }
    const additionalHeaders = {};
    _.forEach(ADDITIONAL_HEADERS, (h) => {
      if (httpContext.get(h)) {
        additionalHeaders[h] = httpContext.get(h);
      }
    });
    return Object.assign({}, headers, additionalHeaders);
  }

  private buildReqConfig(
    reqConfig: any,
    method: string,
    url: string,
    data?: any
  ) {
    return {
      ...reqConfig,
      headers: this.reqHeaders(reqConfig.headers, reqConfig.isExternal),
      method,
      url,
      data,
    };
  }

  private async executor(reqConfig: any) {
    if (reqConfig.doLog || process.env.DO_LOG_REQ === "true") {
      logger.info(
        `Initiating ${reqConfig.method} with headers :: ${JSON.stringify(
          reqConfig.headers
        )} req on url: ${reqConfig.baseURL}${
          reqConfig.url
        } with data: ${JSON.stringify(reqConfig.data)}`
      );
    } else {
      logger.info(
        `Initiating ${reqConfig.method} req on url: ${reqConfig.baseURL}${reqConfig.url}`
      );
    }
    const res = await firstValueFrom(
      this.httpService.request(reqConfig).pipe(
        catchError((e) => {
          logger.error(
            `Http req error url: ${reqConfig.baseURL}${
              reqConfig.url
            }: ${e} data:${JSON.stringify(e?.response?.data)} status: ${
              e?.response?.status
            }`
          );
          throw new HttpException(e?.response?.data, e?.response?.status);
        })
      )
    );
    logger.info(
      `Request from url: ${reqConfig?.baseURL}${
        reqConfig?.url
      } processed :: ${JSON.stringify(
        res.data
      )} with headers :: ${JSON.stringify(res.headers)}`
    );
    return res.data;
  }

  private post(reqConfig, url: string, data: any) {
    return this.executor(this.buildReqConfig(reqConfig, "post", url, data));
  }

  private put(reqConfig, url: string, data: any) {
    return this.executor(this.buildReqConfig(reqConfig, "put", url, data));
  }

  private patch(reqConfig, url: string, data: any) {
    return this.executor(this.buildReqConfig(reqConfig, "patch", url, data));
  }

  private get(reqConfig, url: string) {
    return this.executor(this.buildReqConfig(reqConfig, "get", url));
  }

  public request(reqConfig): IHttpReq {
    if (!reqConfig) {
      throw new HttpException(
        "Internal server error!",
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
    return {
      get: (url: string, addConfig?: Record<string, any>) =>
        this.get(_.merge(reqConfig, addConfig), url),
      post: (url: string, data: any, addConfig?: Record<string, any>) =>
        this.post(_.merge(reqConfig, addConfig), url, data),
      put: (url: string, data: any, addConfig?: Record<string, any>) =>
        this.put(_.merge(reqConfig, addConfig), url, data),
      patch: (url: string, data: any, addConfig?: Record<string, any>) =>
        this.patch(_.merge(reqConfig, addConfig), url, data),
    };
  }
}
