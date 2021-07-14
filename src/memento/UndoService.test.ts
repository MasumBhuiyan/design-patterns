import { Editor } from "./Editor";
import { EditorState } from "./EditorState";
import { UndoService } from "./UndoService";


describe("UndoService", () => {
    it("should return a valid editor.", () => {
        let undoService:UndoService = new UndoService();
        undoService.store(new EditorState("T1", "B1"));
        undoService.store(new EditorState("T2", "B2"));
        undoService.store(new EditorState("T3", "B3"));
        undoService.undo();
        undoService.undo();
        
        let editor:Editor = new Editor();
        editor.set(new EditorState("T2", "B1")); 
        expect(undoService.getEditor()).toMatchObject(editor);
    });
});

