import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { CustomerServiceImpl } from "./service/customer.service.impl";
import { CustomerRepository } from "./repository/customer.repository";
import { CustomerController } from "./controller/customer.controller";
import { CustomerService } from "./service/customer.service";
import { CustomerSchema } from "./schema";
import { DatabaseModule } from "src/database";

@Module({
  // imports: [
  //   MongooseModule.forFeature([{ name: "Customer", schema: CustomerSchema }]),
  // ],
  controllers: [CustomerController],
  providers: [
    {
      provide: CustomerService,
      useClass: CustomerServiceImpl,
    },
    CustomerRepository,
  ],
})
export class CustomerModule {}
