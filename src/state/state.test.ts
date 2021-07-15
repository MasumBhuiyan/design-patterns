import { BrushTool } from "./BrushTool";
import { Canvas } from "./Canvas";
import { SelectionTool } from "./SelectionTool";

describe("State pattern", ()=> {
    const canvas1 = new Canvas(new BrushTool());
    
    it('Brush tool', () => {
        expect(canvas1.mouseUp()).toBe("Brush tool: mouse up");
        expect(canvas1.mouseDown()).toBe("Brush tool: mouse down");
    });

    const canvas2 = new Canvas(new SelectionTool());
    it('Selection tool', () => {
        expect(canvas2.mouseUp()).toBe("Selection tool: mouse up");
        expect(canvas2.mouseDown()).toBe("Selection tool: mouse down");
    });

});