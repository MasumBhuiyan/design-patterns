import { HtmlNode } from "./HtmlNode";

export class HeadingNode implements HtmlNode {
    public highlight():void {
        console.log("Highlight heading node");
    }
}