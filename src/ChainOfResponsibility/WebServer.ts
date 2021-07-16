import { Handler } from "./Handler";
import { HttpRequest } from "./HttpRequest";

export class WebsServer {
    private handler:Handler;

    constructor(handler:Handler) { 
        this.handler = handler;
    }

    public handle(request:HttpRequest):void {
        this.handler.handle(request);
    }
}