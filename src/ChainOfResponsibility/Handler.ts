import { HttpRequest } from "./HttpRequest";

export abstract class Handler {
    private next:Handler;

    constructor(handler:Handler) {
        this.next = handler;
    }

    public handle(request:HttpRequest):void {
        if( this.doHandle(request) ) {
            return ;
        }
        if( this.next != null && this.next != undefined ) {
            this.next.handle(request);
        }
    }
    public abstract doHandle(request:HttpRequest):boolean; 
}