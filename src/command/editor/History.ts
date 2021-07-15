import { Command } from "../framework/Command";
import { UndoableCommand } from "./UndoableCommand";

export class History {
    private undoableCommands:UndoableCommand[];

    constructor() {
        this.undoableCommands = [];
    }

    push(undoableCommand:UndoableCommand):void {
        this.undoableCommands.push(undoableCommand);
    }

    pop():UndoableCommand|undefined {
        return this.undoableCommands.pop();
    }
}