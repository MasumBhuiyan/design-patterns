import { UiControl } from "./UiControl";

export abstract class DialogBox {
    abstract changed(uiControl:UiControl):void;
}