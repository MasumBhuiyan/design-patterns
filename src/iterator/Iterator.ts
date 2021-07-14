export interface Iterator {
    hasNext():boolean;
    next():void;
    current():string;
}