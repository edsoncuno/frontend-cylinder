export default class CircularLinkedList {
    #size;
    #last;
    constructor() {
        this.#size = 0;
        this.#last = null
    }
    add(index, newNode) {
        if (index < 0 || index > this.#size) {
            throw new Error('CircularLinkedList add: index < 0 || index > ' + this.#size);
        }
        else {
            if (this.isEmpty()) {
                this.#last = newNode;
                newNode.next = newNode;
            } else {
                if (index === 0) {
                    newNode.next = this.#last.next;
                    this.#last.next = newNode;
                }
                else {
                    if (index === this.#size) {
                        newNode.next = this.#last.next;
                        this.#last.next = newNode;
                        this.#last = newNode;
                    }
                    else {
                        let previousNode = this.node(index - 1);
                        newNode.next = previousNode.next;
                        previousNode.next = newNode;
                    }
                }
            }
            this.#size++;
        }
    }
    isEmpty() {
        return this.#size === 0;
    }
    size(){
        return this.#size;
    }
    node(index) {
        let currentNode = this.#last.next;
        for (let i = 0; i < index; i++) {
            currentNode = currentNode.next;
        }
        return currentNode;
    }
    get(index) {
        if (index < 0 || index > this.#size) {
            throw new Error('CircularLinkedList get: index < 0 || index > ' + this.#size - 1);
        }
        return this.node(index);
    }
    remove(index) {
        if (this.isEmpty()) {
            throw new Error('CircularLinkedList remove: isEmpty');
        }
        if (index < 0 || index > this.#size) {
            throw new Error('CircularLinkedList remove: index < 0 || index > ' + this.#size - 1);
        } else {
            if (index === 0) {
                if (this.#size === 1) {
                    this.clear();
                } else {
                    this.#last.next = this.#last.next.next;
                }
            }
            else {
                if (index === this.#size - 1) {
                    let previousNode = this.node(index - 1);
                    previousNode.next = this.#last.next;
                    this.#last = previousNode;
                } else {
                    let previousNode = this.node(index - 1);
                    previousNode.next = previousNode.next.next;
                }
            }
            this.#size--;
        }
    }
    clear() {
        this.#last = null;
        this.#size = 0;
    }
    toString() {
        let output = '(';
        if (this.isEmpty()) {
            // no hacer nada
        }
        if (this.#size === 1) {
            output = output + this.#last.object.toString();
        }
        else {
            let first = true;
            for (let currentNode = this.#last.next; currentNode !== this.#last; currentNode = currentNode.next) {
                if (first) {
                    output = output + currentNode.object.toString();
                    first = false;
                }
                else {
                    output = output + ' ' + currentNode.object.toString();
                }
            }
            output = output + ' ' + this.#last.object.toString();
        }
        return output + ')';
    }
}