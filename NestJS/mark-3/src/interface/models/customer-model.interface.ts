import { Model } from "mongoose";
export interface ICustomer {
  _id: string;
  phone: string;
  email: string;
  firstName: string;
  lastName: string;
  createdAt: Number;
  updatedAt: Number;
}

export interface ICustomerDocument extends ICustomer, Document {}

export type ICustomerModel = Model<ICustomerDocument>;
