//import CircularLinkedList from '../list/CircularLinkedList';
//import NodeFourPointers from './NodeFourPointers';

import Plano from "./Plano";

export default class Main {
    main() {
        let newPlano = new Plano(1);
        console.log(newPlano.toString())
        console.log(newPlano.toArray());
    }
}