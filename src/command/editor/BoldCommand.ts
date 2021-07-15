import { HtmlDocument } from "./HtmlDocument";
import { UndoableCommand } from "./UndoableCommand";
import { History } from "./History";

export class BoldCommand implements UndoableCommand {
    private history:History;
    private htmlDocument:HtmlDocument;
    private previousContent:string;

    constructor(history:History, htmlDocument:HtmlDocument) {
        this.history = history;
        this.htmlDocument = htmlDocument;
    }

    execute():string {
        this.previousContent = this.htmlDocument.getContent();
        this.htmlDocument.bold();
        this.history.push(this);
        return this.htmlDocument.getContent();
    }

    unexecute():string {
        this.htmlDocument.setContent(this.previousContent);
        this.history.pop();
        return this.htmlDocument.getContent();
    }
}