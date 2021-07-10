const _states = new WeakMap();

export class History {
    constructor() {
        _states.set(this, []);
    }

    push(state) {
        const states = _states.get(this);
        states.push(state);
        _states.set(this, states);
    }

    pop() {
        const states = _states.get(this);
        states.pop();
        _states.set(this, states)
        if (states.length >= 1) {
            return states[states.length - 1];
        } else {
            throw console.error("Nothing to undo");
        }
    }
}