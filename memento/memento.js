import { Editor } from "./Editor.js";
import { History } from "./History.js";

const editor = new Editor();
const history = new History();

function addContent(content) {
    editor.setContent(content);
    const state = editor.createState(content);
    history.push(state);
}

function undo() {
    const state = history.pop();
    editor.setContent(state.getContent());
    return editor.getContent();
}

addContent("content a");
addContent("content b");
addContent("content c");
console.log(undo());
console.log(undo());
console.log(undo());