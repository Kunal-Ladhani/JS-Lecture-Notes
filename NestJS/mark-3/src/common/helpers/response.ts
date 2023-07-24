import mongoose from "mongoose";
import { KYC_STATUS, STATUS } from "../common/constants";
import { ICheckVkycStatusRes } from "src/interface";

export const REGISTER_CUSTOMER_RES = {
  customerId: new mongoose.Types.ObjectId().toString(),
  status: STATUS.CUSTOMER_REGISTERED_SUCCESSFULLY,
};

export const DEMOGRAPHIC_AUTH_RES = {
  isAuthenticated: true,
};

export const SEND_EKYC_OTP_RES = {
  txnRefId: "123456waXpyre283hdnA",
};

export const VERIFY_EKYC_OTP_RES = {
  otp: "235632",
  txnRefNo: "123456waXpyre283hdnA",
};

export const ONBOARD_CUSTOMER_RES = {
  customerId: new mongoose.Types.ObjectId(),
  status: STATUS.CUSTOMER_REGISTERED_SUCCESSFULLY,
};

export const VKYC_STATUS_CHECK_RES = {
  status: KYC_STATUS.COMPLETED,
};
