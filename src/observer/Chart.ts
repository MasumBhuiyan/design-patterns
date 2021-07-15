import { Observer } from "./Observer";
import { DataSource } from './DataSource';

export class Chart implements Observer {
    private dataSource:DataSource;

    constructor(dataSource:DataSource) {
        this.dataSource = dataSource;
    }

    update():string {
        return `Chart updated value: ${this.dataSource.getValue()}`;
    }
}