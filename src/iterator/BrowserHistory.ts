import { Iterator } from './Iterator';

export class BrowserHistory {
    private urls:string[];

    constructor() {
        this.urls = [];
    }

    public push(url:string):void {
        this.urls.push(url);
    }

    public pop():void {
        this.urls.pop();
    }

    createIterator():Iterator {
        return new BrowserHistory.ListIterator(this);
    }

    static ListIterator = class implements Iterator {
        private browserHistory:BrowserHistory;
        private index:number;
    
        constructor(browserHistory:BrowserHistory) {
            this.browserHistory = browserHistory;
            this.index = 0;
        }
    
        hasNext():boolean {
            return this.index < this.browserHistory.urls.length;
        }
    
        current():string {
            return this.browserHistory.urls[this.index];
        }
    
        next():void {
            this.index += 1;
        }
    }
}
