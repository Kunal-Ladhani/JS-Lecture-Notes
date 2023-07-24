import { Model } from 'mongoose';

export interface IProfessionalDetails {
  incomeRange: string;
  employmentType: string;
  employmentIndustry: string;
  sourceOfIncome: string;
}

export interface IOnboardingLocation {
  long: number;
  lat: number;
}

export interface IAddress {
  line1: string;
  line2: string;
  line3: string;
  zipCode: string;
  city: string;
  state: string;
  countryCode: string;
  isCurrentAddress: boolean;
}

export interface INominee {
  relation: string;
  fullName: string;
  dateOfBirth: string;
}

export interface IPan {
  value: string;
  isVerified: boolean;
}

export interface ICustomer {
  _id: string;
  appUserId: string;
  pan: IPan;
  mobileNo: string;
  email: string;
  isDemographicAuth: string;
  isAadhaarVerified: boolean;
  aadhaarHash: string;
  aadhaarVerificationDate: number;
  isAadhaarPanNameMatched: boolean;
  kycStatus: string;
  kycType: string;
  kycStartTime: number;
  title: string;
  gender: string;
  firstName: string;
  middleName: string;
  lastName: string;
  fullName: string;
  dateOfBirth: string;
  birthPlace: string;
  countryOfBirth: string;
  educationalQualification: string;
  maritalStatus: string;
  professionalDetails: IProfessionalDetails;
  language: string;
  onboardingLocation: IOnboardingLocation;
  permanentAddress: IAddress;
  communicationAddress: IAddress;
  residentialStatus: string; 
  motherName: string;
  fatherName: string;
  nominees: INominee[];
  status: string;
  bankCustomerId: string;
  accountNumber: string;
  ifscCode: string;
  accountRegistrationDate: number;
  accountOpeningDate: number;
}

export interface ICustomerDocument extends ICustomer, Document {}

export type ICustomerModel = Model<ICustomerDocument>;
