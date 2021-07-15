import { DataSource } from "./DataSource";
import { Observer } from "./Observer";

export class SpreadSheet implements Observer {
    private dataSource:DataSource;

    constructor(dataSource:DataSource) {
        this.dataSource = dataSource;
    }
    
    update():string {
        return `Spreadsheet updated value: ${this.dataSource.getValue()}`;
    }
}