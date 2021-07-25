export class CustomerService {
    addCustomer():string {
        console.log("customer added");
        return "customer added";
    }

    deleteCustomer():string {
        console.log("customer deleted");
        return "customer deleted";
    }
}