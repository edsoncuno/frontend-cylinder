import Node from '../list/Node';

export default class NodeFourPointers extends Node {
    #up;
    #down;
    constructor(object) {
        super(object);
        this.#up = null;
        this.#down = null;
    }
    get up() {
        return this.#up;
    }
    set up(up) {
        this.#up = up;
    }
    get down() {
        return this.#down;
    }
    set down(down) {
        this.#down = down;
    }
}