import { AuditTrail } from "./AuditTrail";

export abstract class Task {
    private auditTrail:AuditTrail;

    constructor(auditTrail:AuditTrail) {
        this.auditTrail = auditTrail;
    }

    protected abstract perform():string;

    execute():string {
        return this.auditTrail.record() + " and " + this.perform();
    }
}
