export interface IRegisterCustomerReq {
  appUserId: string;

  title: string;

  fullName: string;

  pan: string;

  email: string;

  mobileNo: string;

  dateOfBirth: string;
}

export interface ICustomerDetail {
  customerId: string;

  status: string;
}
