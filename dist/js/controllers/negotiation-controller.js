import { DaysOfWeek } from "../enums/daysofweek.js";
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationsView } from "../views/negotiations-view.js";
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.negotiationsView = new NegotiationsView("#negotiationsView");
        this.messageView = new MessageView("#mensagemView");
        this.inputDate = document.querySelector("#data");
        this.inputQuantity = document.querySelector("#quantidade");
        this.inputValue = document.querySelector("#valor");
        this.negotiationsView.update(this.negotiations);
    }
    addNegotiation() {
        const negotiation = this.createNegotiation();
        if (!this.isWeekDay(negotiation.date)) {
            this.messageView.update("Only on weekdays");
            return;
        }
        this.negotiations.addNegotiation(negotiation);
        this.clearForm();
        this.updateView();
    }
    isWeekDay(date) {
        return date.getDay() > DaysOfWeek.SUNDAY && date.getDay() < DaysOfWeek.SATURDAY;
    }
    createNegotiation() {
        const exp = /-/g;
        const date = new Date(this.inputDate.value.replace(exp, ","));
        const quantity = parseInt(this.inputQuantity.value);
        const value = parseInt(this.inputValue.value);
        return new Negotiation(date, quantity, value);
    }
    clearForm() {
        this.inputDate.value = "";
        this.inputQuantity.value = "";
        this.inputValue.value = "";
        this.inputDate.focus();
    }
    updateView() {
        this.negotiationsView.update(this.negotiations);
        this.messageView.update("Item created Sucess");
    }
}
