// import { Connection, Schema } from 'mongoose';

// import { IKycDetailsDocument, IKycDetailsModel } from '../../interface';
// import { KYC_STATUS, KYC_TYPE } from '../constants';

// const KycDetailsSchema = new Schema({
//   customerId: { type: Schema.Types.ObjectId, ref: 'Customer' },
//   trackingId: String,
//   crn: String,
//   type: { type: String, enum: Object.keys(KYC_TYPE) },
//   status: { type: String, enum: Object.keys(KYC_STATUS) },
//   waitPageUrl: String,
//   date: Number,
// });

// KycDetailsSchema.pre(['updateOne', 'updateMany'], function (next) {
//   this.set({ updatedAt: Date.now() });
//   next();
// });

// export const KycDetailsModelFn: (conn: Connection) => IKycDetailsModel = (conn: Connection) =>
//   conn.model<IKycDetailsDocument, IKycDetailsModel>('KycDetails', KycDetailsSchema, 'kyc_details');
