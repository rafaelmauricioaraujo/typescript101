import { View } from "./view.js";
export class NegotiationsView extends View {
    template(model) {
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
    formating(Date) {
        return new Intl.DateTimeFormat().format(Date);
    }
}
//# sourceMappingURL=negotiations-view.js.map