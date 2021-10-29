import { TodayNegotiation } from "../interfaces/negotiation-of-today.js"
import { Negotiation } from "../models/negotiation.js"

export class NegotiationService {
    public getTodayNegotiation(): Promise<Array<Negotiation>> {

        return fetch("http://localhost:8080/dados")
            .then((res) => {
                return res.json()
            }).then((data: Array<TodayNegotiation>) => {
                return data.map(item => {
                    return new Negotiation(new Date(), item.vezes, item.montante)
                })
            })

    }
}