import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";

export class NegotiationController {

    private inputDate: HTMLInputElement;
    private inputQuantity: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private negotiations = new Negotiations();

    constructor() {
        this.inputDate = document.querySelector("#data");
        this.inputQuantity = document.querySelector("#quantidade");
        this.inputValue = document.querySelector("#valor");
    }

    addNegotiation(): void {
        const negotiation = this.createNegotiation();
        this.negotiations.addNegotiation(negotiation);        
        console.log(this.negotiations.list());
        this.clearForm();
    }

    createNegotiation(): Negotiation {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ","));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseInt(this.inputValue.value);
        return new Negotiation(date, quantity, value);
    }

    clearForm(): void {
        this.inputDate.value = "";
        this.inputQuantity.value = "";
        this.inputValue.value = "";
        this.inputDate.focus();

    }

}