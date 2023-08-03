import { Inject, Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { MongoConnection } from "src/common/helpers";
import { ICustomer, ICustomerModel } from "src/interface";
import { CustomerSchema } from "../schema";
import { InjectModel } from "@nestjs/mongoose";
import { DATABASE_PROVIDER } from "src/common/constants";

@Injectable()
export class CustomerRepository {
  // private customerModel: Model<ICustomer>;
  // constructor() {
  //   this.customerModel = MongoConnection.buildModels(
  //     DATABASE_PROVIDER.CUSTOMER,
  //     CustomerSchema
  //   );
  // }

  constructor(
    @Inject(DATABASE_PROVIDER.CUSTOMER)
    private readonly customerModel: ICustomerModel
  ) {}

  async findOne(customerId: string): Promise<ICustomer> {
    return await this.customerModel.findById(customerId);
  }
}
