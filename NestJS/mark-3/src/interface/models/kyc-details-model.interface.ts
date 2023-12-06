import { Model } from 'mongoose';

export interface IKycDetails {
  customerId: string;
  trackingId: string;
  crn: string;
  type: string;
  status: string;
  waitPageUrl: string;
  date: number;
}

export interface IKycDetailsDocument extends IKycDetails, Document {}

export type IKycDetailsModel = Model<IKycDetailsDocument>;
