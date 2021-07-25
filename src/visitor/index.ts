import { AnchorNode } from "./AnchorNode";
import { HeadingNode } from "./HeadingNode";
import { HighlightOperation } from "./HightLightOperation";
import { HtmlDocument } from "./HtmlDocument";

const htmlDocument = new HtmlDocument();
htmlDocument.push(new AnchorNode());
htmlDocument.push(new HeadingNode());

htmlDocument.execute(new HighlightOperation());