import CircularLinkedList from '../list/CircularLinkedList';
import NodeFourPointers from './NodeFourPointers';

export default class Base {
    #number_rows;
    #rows;
    constructor(n) {
        if (n <= 0) {
            throw new Error('Base : n <= 0');
        }
        this.#number_rows = n + 1;
        this.#rows = [];
        this.build();
    }
    build() {
        this.fill();
        this.point();
    }
    fill() {

    }
    point() {

    }
}