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
}
