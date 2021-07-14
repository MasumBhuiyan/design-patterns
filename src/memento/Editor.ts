import { EditorState } from "./EditorState";

export class Editor {
    private editorState:EditorState;

    constructor() {
        this.editorState = new EditorState("", "");
    }

    public set(editorState:EditorState) {
        this.editorState = editorState;
    }
}