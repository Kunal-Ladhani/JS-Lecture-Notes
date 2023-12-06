import httpContext from "express-http-context";
import _ from "lodash";
import moment from "moment";
import { v4 as uuid } from "uuid";
import als from "async-local-storage";

import { MaskUtils } from "../utils";

/**
 * Print log to console
 * @param level
 * @param message
 * @param metaData
 */
const printLog = (
  level: string,
  message: string,
  metaData: Record<string, any>
) => {
  const timestamp = moment().utcOffset("+0530").format("DD-MM::HH:mm:ss");
  const logData = JSON.stringify({
    level,
    timestamp,
    ...metaData,
  });
  console.log(
    logData.substring(0, logData.length - 1) + ",message: " + message + "}"
  );
};

// Build logging metadata
const getMetaData = () => {
  const correlationId =
    httpContext.get("correlationId") ||
    als.get("correlationId") ||
    `SA-UK-CUSTOMER-${uuid()}`;
  return {
    appName: "SA-UK-CUSTOMER",
    userId: httpContext.get("userEmail"),
    correlationId,
  };
};

// Handle logs
const logHandler = (level: string) => (message: string) => {
  const logMessage = MaskUtils.mask(message, [
    "x-login-pin",
    "mpin",
    "pin",
    "password",
  ]);

  const metaData = getMetaData();

  printLog(level, logMessage, metaData);
};

export const logger: { warn: any; info: any; error: any; debug: any } =
  _.reduce(
    ["warn", "error", "info", "debug"],
    (customLogger: any, level) => {
      customLogger[level] = logHandler(level);
      return customLogger;
    },
    {}
  );
