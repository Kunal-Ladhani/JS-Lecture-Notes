export interface IBlacklistSearchReq {
  title: string;
  fullName: string;
  dateOfBirth: string;
  pidDocType : string;
  pidDocNum : string;  // pan no.
}

export interface IBlacklistSearchRes {
  isBlackListed: boolean
}
