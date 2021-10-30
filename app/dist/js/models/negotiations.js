export class Negotiations {
    constructor() {
        this.negotiations = [];
    }
    addNegotiation(negotiation) {
        this.negotiations.push(negotiation);
    }
    list() {
        return this.negotiations;
    }
    toText() {
        return JSON.stringify(this.negotiations);
    }
    isEqual(negotiations) {
        return JSON.stringify(this.negotiations) === JSON.stringify(negotiations.list());
    }
}
//# sourceMappingURL=negotiations.js.map