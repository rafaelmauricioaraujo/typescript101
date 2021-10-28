export function domInjector(selector: string) {
    return function (target: any, propertyKey: string) {

        console.log(`adding getter on ${target.constructor.name} to get ${propertyKey} `);

        let element: HTMLElement

        const getter = function () {
            if (!element) {
                console.log(`acessing getter property ${propertyKey} using ${selector}`);
                element = document.querySelector(selector) as HTMLElement;
            }
            return element;
        }

        Object.defineProperty(target, propertyKey, {
            get: getter
        });

    }
}
