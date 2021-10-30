import { Negotiation } from "../models/negotiation.js";
export class NegotiationService {
    getTodayNegotiation() {
        return fetch("http://localhost:8080/dados")
            .then((res) => {
            return res.json();
        }).then((data) => {
            return data.map(item => {
                return new Negotiation(new Date(), item.vezes, item.montante);
            });
        });
    }
}
//# sourceMappingURL=negotiation-service.js.map