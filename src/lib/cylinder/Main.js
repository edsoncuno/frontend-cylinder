//import Plano from "./Plano";
import Base from "./Base";

export default class Main {
    main() {
        let newBase = new Base(2);
        console.log(newBase.toString())
        /*
        let newPlano = new Plano(1);
        console.log(newPlano.toString())
        console.log(newPlano.toArray());
        */
    }
}