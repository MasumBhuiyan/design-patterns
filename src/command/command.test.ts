import { AddCustomerCommand } from "./AddCustomerCommand";
import { DeleteCustomerCommand } from "./DeleteCustomerCommand";
import { Button } from "./framework/Button";
import { CustomerService } from "./CustomerService";
import { BoldCommand } from './editor/BoldCommand';
import { History } from './editor/History';
import { HtmlDocument } from './editor/HtmlDocument';

describe("Command pattern", () => {
    it("should return added a customer", () => {
        const customerService = new CustomerService();
        const command = new AddCustomerCommand(customerService);
        const addButton = new Button("Add customer button", command);


        expect(addButton.onClik()).toBe("customer added");
    });

    it("should return deleted a customer", () => {
        const customerService = new CustomerService();
        const command = new DeleteCustomerCommand(customerService);
        const deleteButton = new Button("Add customer button", command);


        expect(deleteButton.onClik()).toBe("customer deleted");
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