import { Command } from "./Command";

export class Button {
    private label:string;
    private command:Command;

    constructor(label:string, command:Command) {
        this.label = label;
        this.command = command;
    }

    onClik():string {
        return this.command.execute();
    }
}