export class Negotiation {
    private _date: Date;
    private _quatity: number;
    private _value: number;

    constructor(date: Date, quantity: number, value: number) {
        this._date = date;
        this._quatity = quantity;
        this._value = value;
    }

    get date(): Date {
        return this._date;
    }

    get quatity(): number {
        return this._quatity;
    }

    get value(): number {
        return this._value;
    }

    get volume(): number {
        return this._quatity * this._value;
    }
}
