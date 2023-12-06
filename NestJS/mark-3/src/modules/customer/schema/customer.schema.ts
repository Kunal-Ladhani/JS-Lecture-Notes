import mongoose, { Connection, Schema } from "mongoose";

import { ICustomerDocument, ICustomerModel } from "../../../interface";

// const schema = mongoose.Schema;
// const types = schema.Types;

// or,

const types = Schema.Types;

export const CustomerSchema: Schema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String },
  phone: { type: Number },
  createdAt: { type: Number, default: Date.now() },
  updatedAt: { type: Number, default: Date.now() },
});

CustomerSchema.methods.getProductsInCart = () => {
  // this is basically a plugin
  // frequently used query can be written here, inside this method
  // method it will perform that query task
};

/** NOTE:
 * DB operation is the most costly thing for a backend server
 * it should be done least possible no of times
 * try and use cacheing as much as possible while designing a backend
 * eg - redis
 * db query should be simple - for that do the schema design properly.
 * if you want to manipulate data do it in the [service/repo(DAO)] layer ?
 * same reason - db ops are costly/time taking
 */

// DEFINE MONGODB SCHEMA ACCORDING TO mongoose - default manual defination.
// module.exports = mongoose.model("Customer", CustomerSchema);

export const CustomerModelFn: (conn: Connection) => ICustomerModel = (
  conn: Connection
) => conn.model<ICustomerDocument, ICustomerModel>("Customer", CustomerSchema);
