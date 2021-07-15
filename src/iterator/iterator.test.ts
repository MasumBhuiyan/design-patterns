import { BrowserHistory } from "./BrowserHistory";

describe("Iterator pattern", () => {
    const browserHistory = new BrowserHistory();
    browserHistory.push("https://google.com");
    browserHistory.push("https://yahoo.com");
    browserHistory.push("https://wikipedia.org");

    it("should print identically.", () => {
        const urls = ["https://google.com", "https://yahoo.com", "https://wikipedia.org"];
        let index:number = 0;
        const iterator = browserHistory.createIterator();
        while( iterator.hasNext() ) {
            expect(iterator.current()).toBe(urls[index++]);
            iterator.next();
        }
    });
});