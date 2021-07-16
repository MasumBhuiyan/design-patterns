import { ArticlesDialogBox } from "./ArticlesDialogBox";

describe("Mediator", ()=> {
    it("should print something", ()=> {
        const articlesDialogBox = new ArticlesDialogBox();
        articlesDialogBox.setArticlesListBox("content A");
        const saveButton = articlesDialogBox.getSaveButton();
        const titleTextBoxContent = articlesDialogBox.getTitleTextBox().getContent();
        expect(saveButton.getIsEnabled()).toBeTruthy();
        expect(titleTextBoxContent).toBe("content A");
    });
});