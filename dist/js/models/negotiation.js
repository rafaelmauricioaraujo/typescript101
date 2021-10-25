export class Negotiation {
    #date;
    #quatity;
    #value;

    constructor(date, quatity, value) {
        this.#date = date;
        this.#quatity = quatity;
        this.#value = value;
    }

    get date(){
        return this.#date;
    }

    get quatity() {
        return this.#quatity;
    }

    get value(){
        return this.#value;
    }

    get volume(){
        return this.#quatity * this.#value;
    }
}
