import { Inject, Injectable } from "@nestjs/common";
import { CustomerService } from "./customer.service";
import { ICustomer } from "src/interface";
import { CustomerRepository } from "../repository/customer.repository";

@Injectable()
export class CustomerServiceImpl implements CustomerService {
  constructor(private readonly customerRepo: CustomerRepository) {}

  async fetchOneCustomer(customerId: string): Promise<ICustomer> {
    return await this.customerRepo.findOne(customerId);
  }
}
