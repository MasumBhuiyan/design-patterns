import { CustomerService } from "./CustomerService";
import { Command } from "./framework/Command";

export class AddCustomerCommand implements Command {
    private customerService:CustomerService;

    constructor(customerService:CustomerService) {
        this.customerService = customerService;
    }

    execute():string {
        return this.customerService.addCustomer();
    }
}