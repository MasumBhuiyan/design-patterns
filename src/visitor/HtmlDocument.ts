import { HtmlNode } from "./HtmlNode";
import { Operation } from "./Operation";

export class HtmlDocument {
    private htmlNodes:HtmlNode[] = [];

    public push(htmlNode:HtmlNode):void {
        this.htmlNodes.push(htmlNode);
    }

    public execute(operation:Operation):void {
        for(let htmlNode of this.htmlNodes) {
            htmlNode.execute(operation);
        }
    }
}