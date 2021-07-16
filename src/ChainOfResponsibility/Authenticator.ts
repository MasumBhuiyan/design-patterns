import { Handler } from "./Handler";
import { HttpRequest } from "./HttpRequest";

export class Authenticator extends Handler {
    constructor(handler:Handler) {
        super(handler);
    }
    public doHandle(request:HttpRequest):boolean {
        const isValid = (request.getUserName() === "admin" && 
                         request.getPassword() === "1234");
        console.log("Authenticator");
        return !isValid;
    }
}