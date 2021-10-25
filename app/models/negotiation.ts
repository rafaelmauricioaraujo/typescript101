export class Negotiation {
    private _date;
    private _quatity;
    private _value;

    constructor(date, quantity, value) {
        this._date = date;
        this._quatity = quantity;
        this._value = value;
    }

    get date(){
        return this._date;
    }

    get quatity() {
        return this._quatity;
    }

    get value(){
        return this._value;
    }

    get volume(){
        return this._quatity * this._value;
    }
}
