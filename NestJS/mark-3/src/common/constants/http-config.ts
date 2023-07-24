// import { config } from 'dotenv';
// config();
// NOTE: These are for running server on local env and testing purpose.

// export const HTTP_REQ_CONFIG = {
//   NX_UK_BANK_CONNECTOR: {
//     // baseURL: process.env.NX_UK_BANK_CONNECTOR_SERVICE_URL,
//     baseURL: 'https://uatone.goniyo.com/nx-uk',
//     timeout: 30000,
//     headers: {
//       'x-api-key': process.env.INTERNAL_API_KEY,
//     },
//   },
// };

export const ADDITIONAL_HEADERS = [
  "x-correlation-id",
  "x-api-key",
  "x-app-version",
  "x-session-id",
  "x-timezone-id",
  "x-app-name",
  "x-device-id",
];
