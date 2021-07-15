import { BrushTool } from "./BrushTool";
import { Tool } from "./Tool";

export class Canvas {
    private tool:Tool;

    constructor(tool:Tool) {
        this.tool = tool;
    }
    
    mouseUp():string {
        return this.tool.mouseUp();
    }

    mouseDown():string {
        return this.tool.mouseDown();
    }
}
