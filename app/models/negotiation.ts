export class Negotiation {
    private _date: Date;
    constructor( date: Date, public readonly quantity: number, public readonly value: number) { 
        this._date = date;
    }

    get date(): Date{
        const date = new Date(this._date.getTime());
        return date;
    }
    get volume(): number {
        return this.quantity * this.value;
    }

    public static createFrom(dateString: string, quantityString: string, valueString: string): Negotiation {
        const exp = /-/g;
        const date = new Date(dateString.replace(exp, ","));
        const quantity = parseInt(quantityString);
        const value = parseInt(valueString);
        return new Negotiation(date, quantity, value);
    }
}
