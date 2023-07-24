export interface IBankCustRegistrationReq {
  title: string;
  firstName: string;
  middleName: string;
  lastName: string;
  surName: string;
  motherName: string;
  fatherName: string;
  communicationAddress: {
    line1: string;
    line2: string;
    line3: string;
    zipCode: string;
    countryCode: string;
    city: string;
    state: string;
    isCurrentAddress: boolean;
  };
  permanentAddress: {
    line1: string;
    line2: string;
    line3: string;
    zipCode: string;
    countryCode: string;
    city: string;
    state: string;
    isCurrentAddress: boolean;
  };
  mobileNo: string;
  dateOfBirth: string;
  birthPlace: string;
  countryOfBirth: string;
  gender: string;
  language: string; // Default: en
  emailId: string;
  panNo: string;
  maritalStatus: string;
  employmentType: string;
  sourceOfIncome: string;
}

export interface IBankCustRegistrationRes {
  customerNumber: string;
}
