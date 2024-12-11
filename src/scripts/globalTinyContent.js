class TinyContentUtility {
    constructor() {
        if (TinyContentUtility.instance) {
            return TinyContentUtility.instance;
        }
        this.content = '';
        TinyContentUtility.instance = this;
    }

    getContent() {
        return this.content
    }

    setContent(payload) {
        // this.content = payload;
        if (typeof payload === 'string') {
            const parser = new DOMParser();
            const doc = parser.parseFromString(payload, 'text/html');
            this.content = doc.body.innerHTML;
        } else {
            this.content = JSON.stringify(payload);
        }
    }
}

const tinyContentInstance = new TinyContentUtility();

window.tinyContentInstance = tinyContentInstance;

