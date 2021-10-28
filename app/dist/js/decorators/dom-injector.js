export function domInjector(selector) {
    return function (target, propertyKey) {
        console.log(`adding getter on ${target.constructor.name} to get ${propertyKey} `);
        const getter = function () {
            console.log(`acessing getter property ${propertyKey} using ${selector}`);
            const element = document.querySelector(selector);
            return element;
        };
        Object.defineProperty(target, propertyKey, {
            get: getter
        });
    };
}
