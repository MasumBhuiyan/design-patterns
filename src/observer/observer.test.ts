import { Chart } from "./Chart";
import { DataSource } from "./DataSource";
import { SpreadSheet } from "./SpreadSheet";

describe("Observer pattern", () => {
    it("all observers should be notified", () => {
        const dataSource = new DataSource();
        const chart = new Chart(dataSource);
        const spreadSheet = new SpreadSheet(dataSource);

        const value = 1;
        dataSource.setValue(value);
        
        expect(spreadSheet.update()).toBe(`Spreadsheet updated value: ${value}`);
        expect(chart.update()).toBe(`Chart updated value: ${value}`);
    });
});