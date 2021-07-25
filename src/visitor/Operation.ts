import { HtmlNode } from "./HtmlNode";

export interface Operation {
    apply(htmlNode:HtmlNode):void;
}