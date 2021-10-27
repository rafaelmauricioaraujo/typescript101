import { DaysOfWeek } from "../enums/daysofweek.js";
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationsView } from "../views/negotiations-view.js";

export class NegotiationController {

    private inputDate: HTMLInputElement;
    private inputQuantity: HTMLInputElement;
    private inputValue: HTMLInputElement;
    private negotiations = new Negotiations();
    private negotiationsView = new NegotiationsView("#negotiationsView", true);
    private messageView = new MessageView("#mensagemView");

    constructor() {
        this.inputDate = document.querySelector("#data") as HTMLInputElement;
        this.inputQuantity = document.querySelector("#quantidade") as HTMLInputElement;
        this.inputValue = document.querySelector("#valor") as HTMLInputElement;
        this.negotiationsView.update(this.negotiations)
    }

    public addNegotiation(): void {

        const negotiation = Negotiation.createFrom(
            this.inputDate.value,
            this.inputQuantity.value,
            this.inputValue.value
        );

        if (!this.isWeekDay(negotiation.date)) {
            this.messageView.update("Only on weekdays");
            return;
        }
        this.negotiations.addNegotiation(negotiation);
        this.clearForm();
        this.updateView();
    }

    private isWeekDay(date: Date) {
        return date.getDay() > DaysOfWeek.SUNDAY && date.getDay() < DaysOfWeek.SATURDAY;
    }

    private clearForm(): void {
        this.inputDate.value = "";
        this.inputQuantity.value = "";
        this.inputValue.value = "";
        this.inputDate.focus();

    }

    private updateView() {
        this.negotiationsView.update(this.negotiations);
        this.messageView.update("Item created Sucess");
    }

}