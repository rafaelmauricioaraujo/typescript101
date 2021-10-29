import { Printable } from "../utils/printable.js";
import { Negotiation } from "./negotiation.js";

export class Negotiations extends Printable {
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

    public toText(): string {
        return JSON.stringify(this.negotiations);
    }
    
}