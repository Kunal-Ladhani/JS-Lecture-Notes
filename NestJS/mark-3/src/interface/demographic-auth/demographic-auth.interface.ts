export interface IDemographicAuthReq {
  uid: string;
  mobileNo: string;
}

export interface IDemographicAuthRes {
  isAuthenticated: boolean;
}
