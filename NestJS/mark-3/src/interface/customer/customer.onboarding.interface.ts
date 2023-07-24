import { IAddress, INominee, IOnboardingLocation } from '../models';

interface IOnboardCustomerAddress extends IAddress {
  isCurrentAddress: boolean;
}

export interface IOnboardCustomerReq {
  customerId?: string;

  name: string;

  motherName: string;

  fatherName: string;

  communicationAddress: IOnboardCustomerAddress;

  permanentAddress: IOnboardCustomerAddress;

  dateOfBirth: string;

  birthPlace: string;

  countryOfBirth: string;

  gender: string;

  language?: string; // Default: en

  maritalStatus: string;

  educationalQualification: string;

  incomeRange: string;

  employmentType: string;

  employmentIndustry: string;

  sourceOfIncome: string;

  residentialStatus: string;

  onboardingLocation: IOnboardingLocation;

  nominee: INominee;
}

export interface IOnboardCustomerRes {
  fullName: string;

  status: string;

  accountNumber?: string;

  ifscCode?: string;
}

export interface IOpenAccountReq {
  customerNumber: string;

  dateOfOpening: string;

  fullName: string;

  shortName: string;

  address: string;

  zipCode: string;

  dateOfBirth: string;
  
  mobileNumber: string;

  nominee: INominee[]
}

export interface IOpenAccountRes {
  accountNumber: string;

  ifsc: string;
}
