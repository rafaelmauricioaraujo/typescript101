export function domInjector(selector: string) {
    return function (target: any, propertyKey: string) {

        console.log(`adding getter on ${target.constructor.name} to get ${propertyKey} `);

        const getter = function () {
            console.log(`acessing getter property ${propertyKey} using ${selector}`);
            const element = document.querySelector(selector);
            return element;
        }

        Object.defineProperty(target, propertyKey, {
            get: getter
        });

    }
}
