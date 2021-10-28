import { Negotiations } from "../models/negotiations.js";
import { View } from "./view.js";

export class NegotiationsView extends View<Negotiations> {
    
    protected template(model: Negotiations): string {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATE</th>
                    <th>QUANTITY</th>
                    <th>VALUE</th>
                </tr>
            </thead>
            </tbody>
                ${model.list().map((negotiation) => {
                    return `
                    <tr>
                        <td>${this.formating(negotiation.date)}</td>
                        <td>${negotiation.quantity}</td>
                        <td>${negotiation.value}</td>
                    </tr>
                    `;
                }).join("")}
            </tbody>
        </table>
        `;
    }

    private formating(Date: Date){
        return new Intl.DateTimeFormat().format(Date);
    }
}
