import { KYC_STATUS } from "src/common/constants";

export interface IVkycStatusCheckRes {
  status: keyof typeof KYC_STATUS;
}

export interface IVkycInitiationData {
  name: string;

  value: string;

  verifyWithPanCard: string;
}

export interface IDevice {
  deviceType: string;

  deviceName: string;

  vendor: string;

  deviceInfo: string;
}

export interface IInitiateVkycRes {
  trackingId: string;

  status: keyof typeof KYC_STATUS;

  waitPageUrl: string;
}
