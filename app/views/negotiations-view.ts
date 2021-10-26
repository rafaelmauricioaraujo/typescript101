import { Negotiations } from "../models/negotiations.js";

export class NegotiationsView {
    
    private element: HTMLElement
    
    constructor(selector: string) {
        this.element = document.querySelector(selector);
    }

    template(model: Negotiations): string {
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
                        <td>${new Intl.DateTimeFormat().format(negotiation.date)}</td>
                        <td>${negotiation.quantity}</td>
                        <td>${negotiation.value}</td>
                    </tr>
                    `;
                }).join("")}
            </tbody>
        </table>
        `;
    }

    update(model: Negotiations): void {
        this.element.innerHTML = this.template(model);
    }
}
