import { DialogBox } from "./DialogBox";

export class UiControl {
    protected dialogBox:DialogBox;

    constructor(dialogBox:DialogBox) {
        this.dialogBox = dialogBox;
    }
}