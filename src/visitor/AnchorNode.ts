import { HtmlNode } from "./HtmlNode";
import { Operation } from "./Operation";

export class AnchorNode implements HtmlNode {
    public execute(operation:Operation):void {
        operation.apply();
    }
}