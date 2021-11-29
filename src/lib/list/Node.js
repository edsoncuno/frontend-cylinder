export default class Node {
    #object;
    #previous;
    #next;
    constructor(object) {
        this.#object = object;
        this.#previous = null;
        this.#next = null;
    }
    get object() {
        return this.#object;
    }
    set object(object) {
        this.#object = object;
    }
    get previous() {
        return this.#previous;
    }
    set previous(previous) {
        this.#previous = previous;
    }
    get next() {
        return this.#next;
    }
    set next(next) {
        this.#next = next;
    }
}