export class EditorState {
    private title:string;
    private content:string;
    
    constructor(title:string, content:string) {
        this.content = content;
        this.title = title;
    }
}