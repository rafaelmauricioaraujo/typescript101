export class Negotiations {
    constructor() {
        this.negotiations = [];
        /**
        sintax sugar
        list(): readonly Negotiation[] {
            return this.negotiations;
        }
         */
    }
    /**
    sintax sugar
    private negotiations: Negotiation[] = [];
    */
    addNegotiation(negotiation) {
        this.negotiations.push(negotiation);
    }
    list() {
        return this.negotiations;
    }
}
