import { AddCustomerCommand } from "./AddCustomerCommand";
import { Button } from "./framework/Button";
import { CustomerService } from "./CustomerService";
import { BoldCommand } from './editor/BoldCommand';
import { History } from './editor/History';
import { HtmlDocument } from './editor/HtmlDocument';

describe("Command pattern", () => {
    it("should return added a customer", () => {
        const customerService = new CustomerService();
        const command = new AddCustomerCommand(customerService);
        const button = new Button("Add customer button", command);
        expect(button.onClik()).toBe("customer added");
    });

    it("undoable command", () => {
        const history = new History();
        const htmlDocument = new HtmlDocument();
        const boldCommand = new BoldCommand(history, htmlDocument);

        htmlDocument.setContent("Hello");
        expect(boldCommand.execute()).toBe("<b>Hello</b>");

        expect(boldCommand.unexecute()).toBe("Hello");
    });
});