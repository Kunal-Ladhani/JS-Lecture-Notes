export interface ISendEkycOtpReq {
  customerId: string
  uid: string;
}
export interface ISendAadhaarOtpReq{
  uid: string;
}

export interface ISendEkycOtpRes {
  txnRefNo: string;
}
