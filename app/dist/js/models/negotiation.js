import { Printable } from "../utils/printable.js";
export class Negotiation extends Printable {
    constructor(date, quantity, value) {
        super();
        this.quantity = quantity;
        this.value = value;
        this._date = date;
    }
    static createFrom(dateString, quantityString, valueString) {
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ","));
        const quantity = parseInt(quantityString);
        const value = parseInt(valueString);
        return new Negotiation(date, quantity, value);
    }
    get date() {
        const date = new Date(this._date.getTime());
        return date;
    }
    get volume() {
        return this.quantity * this.value;
    }
    toText() {
        return `
        Date : ${this.date}
        Quantity: ${this.quantity}
        Value: ${this.value}
        `;
    }
}
