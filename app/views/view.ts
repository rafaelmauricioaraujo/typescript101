export abstract class View<T> {
    protected element: HTMLElement;

    constructor(selector: string){
        this.element = document.querySelector(selector);
    }
    
    protected abstract template(model: T): string;

    abstract update(model: T): void;

}
