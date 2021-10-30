
import { Model } from "../interfaces/model.js";
import { Negotiation } from "./negotiation.js";

export class Negotiations implements Model<Negotiations> {
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
    
    isEqual(negotiations: Negotiations): boolean {
        return JSON.stringify(this.negotiations) === JSON.stringify(negotiations.list());
    }
}