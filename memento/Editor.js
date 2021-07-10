import { EditorState } from "./EditorState.js";

const _content = new WeakMap();

export class Editor {

    getContent() {
        return _content.get(this);
    }

    setContent(content) {
        _content.set(this, content);
    }

    createState(content) {
        return new EditorState(content);
    }

    restore(editorState) {
        _content.set(this, editorState.getContent());
    }
}
