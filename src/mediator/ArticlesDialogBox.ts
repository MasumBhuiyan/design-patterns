import { DialogBox } from "./DialogBox";
import { ListBox } from "./ListBox";
import { UiControl } from "./UiControl";
import { TextBox } from './TextBox';
import { Button } from "./Button"

function isEqual(object1:any, object2:any):boolean {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    
    for(let i in keys1) {
        if( keys1[i] != keys2[i] ) {
            return false;
        }
    }
    return true;
}

export class ArticlesDialogBox extends DialogBox {
    private articlesListBox:ListBox = new ListBox(this);
    private titleTextBox:TextBox = new TextBox(this);
    private saveButton:Button = new Button(this);

    public changed(uiControl:UiControl):void {
        if( isEqual(this.articlesListBox, uiControl) ) {
            this.titleTextBox.setContent(this.articlesListBox.getSelection());
            this.saveButton.setIsEnabled(true);
        } else if( isEqual(this.titleTextBox, uiControl) ) {
            const titleTextBoxContent = this.titleTextBox.getContent(); 
            const isEmpty = titleTextBoxContent == null || titleTextBoxContent.length === 0; 
            this.saveButton.setIsEnabled(!isEmpty);
        } 
    }

    public getArticlesListBox():ListBox {
        return this.articlesListBox;
    }

    public getTitleTextBox():TextBox {
        return this.titleTextBox;
    }

    public getSaveButton():Button {
        return this.saveButton;
    }

    public setArticlesListBox(selection:string):void {
        this.articlesListBox.setSelection(selection);
    }
}