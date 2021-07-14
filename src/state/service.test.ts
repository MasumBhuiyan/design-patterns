import { BrushTool } from "./BrushTool";
import { Canvas } from "./Canvas";

describe("State pattern", ()=> {
    const canvas = new Canvas(new BrushTool());
    
    it('Brush tool', () => {
        expect(canvas.mouseUp()).toBe("Brush tool: mouse up");
        expect(canvas.mouseDown()).toBe("Brush tool: mouse down");
    });

});