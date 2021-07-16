import { Handler } from "./Handler";
import { HttpRequest } from "./HttpRequest";

export class Compressor extends Handler {
    constructor(handler:any) {
        super(handler);
    }

    doHandle(request:HttpRequest):boolean {
        console.log("Compresspr");
        return false;
    }
}