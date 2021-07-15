import { stringify } from "querystring";

export class HtmlDocument {
    private content:string;

    bold():void {
        this.content = "<b>" + this.content + "</b>";
    }

    getContent():string {
        return this.content;
    }

    setContent(content:string):void {
        this.content = content;
    }
}