import { Operation } from "./Operation";

export interface HtmlNode {
    execute(operation:Operation):void;
}