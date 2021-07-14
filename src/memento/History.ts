import { EditorState } from "./EditorState";

export class History {
    private editorStates:EditorState[];
    
    constructor() {
        this.editorStates = [];
    }

    public push(editorState:EditorState) {
        this.editorStates.push(editorState);
    }

    public pop():EditorState {
        this.editorStates.pop() as EditorState;
        return this.editorStates[this.editorStates.length - 1];
    }
}