import { Injectable } from "@nestjs/common";
import { ICustomer } from "src/interface";

export abstract class CustomerService {
  abstract fetchOneCustomer(customerId: string): Promise<ICustomer>;
}
