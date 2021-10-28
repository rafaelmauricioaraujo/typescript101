import { inspect } from "../decorators/inspect.js";
import { runtimeLogin } from "../decorators/runtime-login.js";

export abstract class View<T> {
    protected element: HTMLElement;
    private escape = false;

    constructor(selector: string, escape?: boolean) {
        const element = document.querySelector(selector);
        if (element) {
            this.element = element as HTMLElement;
        } else {
            throw new Error(`failed to select element by ${selector}`);
        }

        if (escape) {
            this.escape = escape;
        }
    }

    @runtimeLogin()
    @inspect()
    public update(model: T): void {
        let template = this.template(model);
        if (this.escape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        this.element.innerHTML = template;
    }

    protected abstract template(model: T): string;

}
