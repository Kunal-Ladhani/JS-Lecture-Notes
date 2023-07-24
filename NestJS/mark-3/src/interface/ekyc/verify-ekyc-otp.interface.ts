export interface IVerifyEkycOtpReq {
  uid: string;

  otp: string;

  txnRefNo: string;
}

interface IAddress {
  line1: string;

  line2: string;

  line3: string;

  city: string;

  state: string;

  country: string;

  zipCode: string;

  co?: string;
}

export interface IVerifyEkycOtpRes {
  name: string;

  gender: string;

  dateOfBirth: string;

  address: IAddress;
}
