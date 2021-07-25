import { AnchorNode } from './AnchorNode';
import { HeadingNode } from './HeadingNode';
import { HtmlNode } from './HtmlNode';
import { Operation } from './Operation';

export class HighlightOperation implements Operation {
   apply(htmlNode:HtmlNode):void {
       console.log(htmlNode + "highlighted");
   }
}