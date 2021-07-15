import { AuditTrail } from "./AuditTrail";
import { Task } from "./Task";

export class TransferMoneyTask extends Task {
    constructor(auditTrail:AuditTrail) {
        super(auditTrail);
    }

    protected perform():string {
        return "money transfered";
    }
}