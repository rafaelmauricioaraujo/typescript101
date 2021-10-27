export abstract class View<T> {
    protected element: HTMLElement;
    private escape = false;

    constructor(selector: string, escape?: boolean) {
        this.element = document.querySelector(selector);
        if (escape) {
            this.escape = escape;
        }
    }

    public update(model: T): void {
        let template = this.template(model);
        this.element.innerHTML = template;
        if (this.escape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        }
    }

    protected abstract template(model: T): string;

}
