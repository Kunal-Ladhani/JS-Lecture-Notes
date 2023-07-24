import { BaseExceptionFilter } from "@nestjs/core";
import { Response } from "express";
import {
  Catch,
  ArgumentsHost,
  HttpStatus,
  HttpException,
} from "@nestjs/common";

import { DEFAULT_EXCEPTION_SOURCE } from "../constants";
import { logger } from "../utils";
import { IException } from "../../interfaces";

@Catch()
export class HttpExceptionFilter extends BaseExceptionFilter {
  constructor() {
    super();
  }

  private getStatus(response: any, originalStatus: any) {
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    if (response?.statusCode) {
      status = response?.statusCode;
    } else if (response?.data?.statusCode) {
      status = response?.data?.statusCode;
    } else if (response.status) {
      /* eslint-disable */
      status = response.status;
    } else if (originalStatus) {
      status = originalStatus;
    }
    return status;
  }

  private getStatusText(resData: any) {
    if (!resData) {
      return "Something went wrong! Please try after sometime";
    }
    const statusText =
      resData?.msg ||
      resData.exception ||
      resData.message ||
      "Something went wrong! Please try after sometime";
    const notAllowedCharRegex = /[[\]]+/;
    if (notAllowedCharRegex.test(statusText)) {
      return "Something went wrong! Please try after sometime";
    }
    return statusText;
  }

  private getSource(exception: any): string {
    let source = DEFAULT_EXCEPTION_SOURCE;
    if (exception?.config?.baseURL) {
      const urlParts = exception?.config?.baseURL?.split("/");
      source = urlParts[urlParts.length - 1];
    }
    return source;
  }

  catch(exception: any, host: ArgumentsHost) {
    const httpHost = host.switchToHttp();
    const response = httpHost.getResponse<Response>();
    const niyoExceptionHeader = "X-niyoappApp-error";

    const errResp: IException = {
      statusCode: 500,
      message: "",
      source: this.getSource(exception),
    };
    if (exception?.code) {
      // platform | mongodb exceptions that are unhandled by code
      errResp.message = exception.code;
    }
    if (exception instanceof HttpException) {
      errResp.statusCode = exception.getStatus();
      errResp.message = exception.message;
    } else if (exception?.response) {
      errResp.statusCode = this.getStatus(
        exception.response,
        exception?.status
      );
      errResp.message = this.getStatusText(exception.response?.data);
    } else {
      errResp.statusCode = HttpStatus.INTERNAL_SERVER_ERROR;
      errResp.message =
        exception.message || "Something went wrong! Please try after sometime";
    }
    logger.error(`HttpException :: ${JSON.stringify(errResp)}`);
    response.setHeader(niyoExceptionHeader, errResp.message);
    response.status(errResp.statusCode).json(errResp);
  }
}
