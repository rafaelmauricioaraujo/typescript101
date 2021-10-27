export class View {
    constructor(selector, escape) {
        this.escape = false;
        this.element = document.querySelector(selector);
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
