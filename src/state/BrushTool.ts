import { Tool } from "./Tool";

export class BrushTool implements Tool {
    public mouseUp():string {
        return "Brush tool: mouse up";
    }

    mouseDown():string {
        return "Brush tool: mouse down";
    }
}