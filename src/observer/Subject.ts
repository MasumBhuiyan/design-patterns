import { Observer } from "./Observer";

export class Subject {
    private observers:Observer[];

    constructor() {
        this.observers = [];
    }

    addObserver(observer:Observer):void {
        this.observers.push(observer);
    }

    removeObserver(observer:Observer):void {
        this.observers.filter(o => o != observer);
    }

    notifyObservers():void {
        for(const observer of this.observers) {
            observer.update();
        }
    }
}