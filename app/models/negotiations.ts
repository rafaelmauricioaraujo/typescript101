import { Negotiation } from "./negotiation.js";

export class Negotiations {
    private negotiations: Array<Negotiation> = [];

    addNegotiation(negotiation: Negotiation) {
        this.negotiations.push(negotiation);
    }

    list(): ReadonlyArray<Negotiation> {
        return this.negotiations;
    }
}