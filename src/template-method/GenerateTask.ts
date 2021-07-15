import { Task } from "./Task";
import { AuditTrail } from "./AuditTrail";

export class GenerateReportTask extends Task {
    constructor(auditTrail:AuditTrail) {
        super(auditTrail);
    }

    protected perform():string {
        return "generated report";
    }
}