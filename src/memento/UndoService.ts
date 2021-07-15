import { Editor } from "./Editor";
import { EditorState } from "./EditorState";
import { History } from "./History";

export class UndoService {
    private history:History;
    private editor:Editor;

    constructor() {
        this.history = new History();
        this.editor = new Editor();
    }

    public store(editorState:EditorState):void {
        this.history.push(editorState);
        this.editor.set(editorState);
    }

    public undo():void {
        let editorState = this.history.pop();
        this.editor.set(editorState);
    }

    getEditor():Editor {
        return this.editor;
    }
}
