import { DialogBox } from "./DialogBox";
import { UiControl } from "./UiControl";

export class Button extends UiControl {
    private isEnabled:boolean = false;

    constructor(dialogBox:DialogBox) {
        super(dialogBox);
    }

    public getIsEnabled():boolean {
        return this.isEnabled;
    } 

    public setIsEnabled(isEnabled:boolean):void {
        this.isEnabled = isEnabled;
        this.dialogBox.changed(this);
    }
}