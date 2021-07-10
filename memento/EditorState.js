const _content = new WeakMap();
const _lastChanged = new WeakMap();

export class EditorState {
    constructor(content) {
        _content.set(this, content);
        _lastChanged.set(this, new Date().getDate());
    }

    getContent() {
        return _content.get(this);
    }

    setContent(content) {
        _content.set(this, content);
    }

    getLastChaged() {
        return _lastChanged.get(this);
    }

    setLastChanged(date) {
        _lastChanged.set(this, date);
    }

    toString() {
        return {
            "content": this.getContent(),
            "Last Changed": this.getLastChanged()
        };
    }
}