import { Tool } from "./Tool";

export class SelectionTool implements Tool {
    mouseUp():string {
        return "Selection tool: mouse up";
    }

    mouseDown():string {
        return "Selection tool: mouse down";
    }
}