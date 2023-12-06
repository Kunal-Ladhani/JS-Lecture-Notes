import { defaultConfig } from "./default";
import { ObjectUtils } from "../common/utils";

export const configuration = async () => {
  const { config } = await import(`./${process.env.NODE_ENV || "development"}`);
  return ObjectUtils.merge(defaultConfig, config);
};
