class API {
    url;
    method;
    #secure;
    constructor(url = 'GET') {
        this.url = url;
        if (url.startsWith("https")) {
            this.#secure = true;
        }
        else {
            this.#secure = false;
        }
    }
    isSecure() {
        return this.#secure;
    }
    updateURL(url) {
        this.url = url;
        if (url.startsWith("https")) {
            this.#secure = true;
        }
        else {
            this.#secure = false;
        }
    }

}