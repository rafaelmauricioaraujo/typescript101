export function runtimeLogin() {
    return function (target, propertyKey, descriptors) {
        const originMethod = descriptors.value;
        descriptors.value = function (...args) {
            const t1 = performance.now();
            const methodReturn = originMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey} runtime: ${(t2 - t1) / 1000}`);
            methodReturn;
        };
        return descriptors;
    };
}
