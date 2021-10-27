export class Negotiation {
    constructor(date, quantity, value) {
        this.quantity = quantity;
        this.value = value;
        this._date = date;
    }
    get date() {
        const date = new Date(this._date.getTime());
        return date;
    }
    get volume() {
        return this.quantity * this.value;
    }
    static createFrom(dateString, quantityString, valueString) {
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ","));
        const quantity = parseInt(quantityString);
        const value = parseInt(valueString);
        return new Negotiation(date, quantity, value);
    }
}
