export function runtimeLogin(onMiliSeconds = false) {
    return function (target, propertyKey, descriptors) {
        const originMethod = descriptors.value;
        descriptors.value = function (...args) {
            let divisor = 1;
            let unit = "seconds";
            if (onMiliSeconds) {
                divisor = 1000;
                unit = "mili seconnds";
            }
            const t1 = performance.now();
            const methodReturn = originMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey} runtime: ${(t2 - t1) / divisor} ${unit}`);
            methodReturn;
        };
        return descriptors;
    };
}
