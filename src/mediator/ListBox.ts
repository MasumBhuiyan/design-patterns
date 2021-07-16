import { DialogBox } from "./DialogBox";
import { UiControl } from "./UiControl";

export class ListBox extends UiControl {
    private selection:string = "";

    constructor(dialogBox:DialogBox) {
        super(dialogBox);
    }

    public getSelection():string {
        return this.selection;
    }

    public setSelection(selection:string):void {
        this.selection = selection;
        this.dialogBox.changed(this);
    }
}