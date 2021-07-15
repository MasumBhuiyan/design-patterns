import { AuditTrail } from "./AuditTrail";
import { GenerateReportTask } from "./GenerateTask";
import { TransferMoneyTask } from "./TransferMoneyTask";

describe("Template method pattern", () => {
    const transferMoneyTask = new TransferMoneyTask(new AuditTrail());
    const generateReportTask = new GenerateReportTask(new AuditTrail());

    it("should be a valid transfer money task", () => {
        expect(transferMoneyTask.execute()).toBe("Audit recorded and money transfered");
        expect(generateReportTask.execute()).toBe("Audit recorded and generated report");
    });
});