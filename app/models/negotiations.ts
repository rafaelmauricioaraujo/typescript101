import { Negotiation } from "./negotiation.js";

export class Negotiations {
    private negotiations: Array<Negotiation> = [];

    /** 
    sintax sugar
    private negotiations: Negotiation[] = [];
    */
   
    addNegotiation(negotiation: Negotiation) {
        this.negotiations.push(negotiation);
    }

    list(): ReadonlyArray<Negotiation> {
        return this.negotiations;
    }

    /**
    sintax sugar
    list(): readonly Negotiation[] {
        return this.negotiations;
    }
     */
}