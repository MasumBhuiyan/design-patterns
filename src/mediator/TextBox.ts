import { DialogBox } from './DialogBox';
import { UiControl } from './UiControl';

export class TextBox extends UiControl {
    private content:string;

    constructor(dialogBox:DialogBox) {
        super(dialogBox);
    }

    public getContent():string {
        return this.content;
    }

    public setContent(content:string):void {
        this.content = content;
        this.dialogBox.changed(this);
    }
}