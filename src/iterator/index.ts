import { BrowserHistory } from "./BrowserHistory";

const browserHistory = new BrowserHistory();
browserHistory.push('https://google.com');
browserHistory.push('https://voogle.com');

const iterator = browserHistory.createIterator();
while( iterator.hasNext() ) {
    console.log(iterator.current());
    iterator.next();
}