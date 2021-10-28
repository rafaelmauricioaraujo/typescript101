export function domInjector(selector) {
    return function (target, propertyKey) {
        console.log(`adding getter on ${target.constructor.name} to get ${propertyKey} `);
        let element;
        const getter = function () {
            if (!element) {
                console.log(`acessing getter property ${propertyKey} using ${selector}`);
                element = document.querySelector(selector);
            }
            return element;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter
        });
    };
}
