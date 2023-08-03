import { Controller, Get, Param } from "@nestjs/common";
import { CustomerService } from "../service/customer.service";
import { ICustomer } from "src/interface";

@Controller("/v1/customer")
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Get("/:customerId")
  fetchOneCustomer(
    @Param("customerId") customerId: string
  ): Promise<ICustomer> {
    return this.customerService.fetchOneCustomer(customerId);
  }
}
