import { View } from "./view.js";

export class MessageView extends View<string> {

    protected template(model: string): string {
        return `
        <p class="alert alert-info">${model}</p>
        `;
    }

    public update(model: string): void {
        this.element.innerHTML = this.template(model)
    }

}