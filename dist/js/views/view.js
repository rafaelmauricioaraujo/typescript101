export class View {
    constructor(selector, escape) {
        this.escape = false;
        const element = document.querySelector(selector);
        if (element) {
            this.element = element;
        }
        else {
            throw new Error(`failed to select element by ${selector}`);
        }
        if (escape) {
            this.escape = escape;
        }
    }
    update(model) {
        let template = this.template(model);
        this.element.innerHTML = template;
        if (this.escape) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        }
    }
}
