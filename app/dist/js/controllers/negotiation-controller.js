var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { domInjector } from "../decorators/dom-injector.js";
import { inspect } from "../decorators/inspect.js";
import { runtimeLogin } from "../decorators/runtime-login.js";
import { DaysOfWeek } from "../enums/daysofweek.js";
import { Negotiation } from "../models/negotiation.js";
import { Negotiations } from "../models/negotiations.js";
import { MessageView } from "../views/message-view.js";
import { NegotiationsView } from "../views/negotiations-view.js";
export class NegotiationController {
    constructor() {
        this.negotiations = new Negotiations();
        this.negotiationsView = new NegotiationsView("#negotiationsView", true);
        this.messageView = new MessageView("#mensagemView");
        this.negotiationsView.update(this.negotiations);
    }
    addNegotiation() {
        const negotiation = Negotiation.createFrom(this.inputDate.value, this.inputQuantity.value, this.inputValue.value);
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
__decorate([
    domInjector("#data")
], NegotiationController.prototype, "inputDate", void 0);
__decorate([
    domInjector("#quantidade")
], NegotiationController.prototype, "inputQuantity", void 0);
__decorate([
    domInjector("#valor")
], NegotiationController.prototype, "inputValue", void 0);
__decorate([
    runtimeLogin(true),
    inspect()
], NegotiationController.prototype, "addNegotiation", null);
