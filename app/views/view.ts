export abstract class View<T> {
    protected element: HTMLElement;

    constructor(selector: string){
        this.element = document.querySelector(selector);
    }

    abstract update(model: T): void;
}
