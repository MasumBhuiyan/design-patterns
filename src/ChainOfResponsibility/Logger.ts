import { Handler } from "./Handler";
import { HttpRequest } from "./HttpRequest";

export class Logger extends Handler {
    constructor(handler:Handler) {
        super(handler);
    }
    
    public doHandle(request:HttpRequest) {
        console.log("Logger");
        return false;
    }
}