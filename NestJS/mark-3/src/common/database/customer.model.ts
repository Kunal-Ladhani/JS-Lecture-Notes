import { Connection, Schema } from "mongoose";

import { ICustomerDocument, ICustomerModel } from "../../interface";
import {
  MARITAL_STATUS,
  SOURCE_OF_INCOME,
  EMPLOYMENT_INDUSTRY,
  EMPLOYMENT_TYPE,
  INCOME_RANGE,
  LANGUAGE,
  STATUS,
  NAME_TITLE,
  GENDER,
  RESIDENTIAL_STATUS,
  KYC_STATUS,
} from "../constants";

const CustomerSchema = new Schema({
  appUserId: { type: String },
  pan: {
    value: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
  },
  mobileNo: { type: String },
  email: { type: String, required: true },
  isDemographicAuth: { type: String },
  isAadhaarVerified: { type: Boolean, default: false },
  aadhaarHash: { type: String },
  aadhaarVerificationDate: { type: Number },
  isAadhaarPanNameMatched: { type: Boolean },
  kycStatus: { type: String, enum: Object.keys(KYC_STATUS) },
  kycType: { type: String },
  kycStartTime: { type: Number },
  title: { type: String, enum: Object.keys(NAME_TITLE) },
  gender: { type: String, enum: Object.keys(GENDER) },
  firstName: { type: String },
  middleName: { type: String },
  lastName: { type: String },
  fullName: { type: String },
  dateOfBirth: { type: String },
  birthPlace: { type: String },
  birthPlaceZip: { type: String },
  countryOfBirth: { type: String },
  educationalQualification: { type: String },
  maritalStatus: { type: String, enum: Object.keys(MARITAL_STATUS) },
  professionalDetails: {
    incomeRange: { type: String, enum: Object.keys(INCOME_RANGE) },
    employmentType: { type: String, enum: Object.keys(EMPLOYMENT_TYPE) },
    employmentIndustry: {
      type: String,
      enum: Object.keys(EMPLOYMENT_INDUSTRY),
    },
    sourceOfIncome: { type: String, enum: Object.keys(SOURCE_OF_INCOME) },
  },
  language: { type: String, enum: Object.keys(LANGUAGE), default: "EN" },
  residentialStatus: { type: String, enum: Object.keys(RESIDENTIAL_STATUS) },
  onboardingLocation: {
    long: Number,
    lat: Number,
  },
  permanentAddress: {
    line1: String,
    line2: String,
    line3: String,
    zipCode: String,
    city: String,
    state: String,
    countryCode: String,
    isCurrentAddress: Boolean,
  },
  communicationAddress: {
    line1: String,
    line2: String,
    line3: String,
    zipCode: String,
    city: String,
    state: String,
    countryCode: String,
    isCurrentAddress: Boolean,
  },
  motherName: { type: String },
  fatherName: { type: String },
  nominees: [
    {
      relation: String,
      fullName: String,
      dateOfBirth: String,
    },
  ],
  status: {
    type: String,
    enum: Object.keys(STATUS),
    default: STATUS.CUSTOMER_REGISTERED_SUCCESSFULLY,
  },
  bankCustomerId: { type: String },
  accountNumber: { type: String },
  ifscCode: { type: String },
  accountRegistrationDate: Number,
  accountOpeningDate: Number,
  communicationMode: [
    {
      mode: String,
      isOptIn: Boolean,
    },
  ],
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() },
});

CustomerSchema.pre(["updateOne", "updateMany"], function (next) {
  this.set({ updatedAt: Date.now() });
  next();
});

export const CustomerModelFn: (conn: Connection) => ICustomerModel = (
  conn: Connection
) =>
  conn.model<ICustomerDocument, ICustomerModel>(
    "Customer",
    CustomerSchema,
    "customer"
  );
