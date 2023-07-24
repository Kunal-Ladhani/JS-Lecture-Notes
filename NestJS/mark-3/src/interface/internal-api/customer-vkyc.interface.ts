import { KYC_STATUS } from "src/common/constants";

export interface ICheckVkycStatusRes {
  status: keyof typeof KYC_STATUS;
}

export interface IVkycInitData {
  name: string;

  value: string;

  verifyWithPanCard: string;
}

export interface IDeviceData {
  deviceType: string;

  deviceName: string;

  vendor: string;

  deviceInfo: string;
}

export interface IVkycInitiationReq {
  trackingId: string; // 12 digit alnum

  displayName: string;

  crn: string; // 8 digit num

  device: IDeviceData;

  data: Array<IVkycInitData>;
}

export interface IVkycInitiationRes {
  trackingId: string;

  status: keyof typeof KYC_STATUS;

  waitPageUrl: string;
}
