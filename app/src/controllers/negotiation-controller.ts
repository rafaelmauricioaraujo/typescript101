import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { runtimeLogin } from "../decorators/runtime-login.js";
import { DaysOfWeek } from "../enums/daysofweek.js";
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationsView } from "../views/negotiations-view.js";

export class NegotiationController {

    @domInjector("#data")
    private inputDate: HTMLInputElement;
    
    @domInjector("#quantidade")
    private inputQuantity: HTMLInputElement;
    
    @domInjector("#valor")
    private inputValue: HTMLInputElement;

    private negotiations = new Negotiations();
    private negotiationsView = new NegotiationsView("#negotiationsView", true);
    private messageView = new MessageView("#mensagemView");

    constructor() {

        /**
         * this property is be getting by decorator donInjector
        this.inputDate = document.querySelector("#data") as HTMLInputElement;
        this.inputQuantity = document.querySelector("#quantidade") as HTMLInputElement;
        this.inputValue = document.querySelector("#valor") as HTMLInputElement;
         */
        this.negotiationsView.update(this.negotiations)
    }

    @runtimeLogin(true)
    @inspect()
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