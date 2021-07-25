import { HtmlNode } from "./HtmlNode";
import { Operation } from "./Operation";

export class PlainText implements Operation {
    apply(htmlNode:HtmlNode):void {
        console.log(htmlNode + "highlighted");
    }
}