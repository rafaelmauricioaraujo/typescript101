export function escape() {
    return function (target, propertyKey, descriptor) {
        const originMethod = descriptor.value;
        descriptor.value = function (...args) {
            let originReturn = originMethod.apply(this, args);
            if (typeof originReturn === "string") {
                originReturn = originReturn.replace(/<script>[\s\S]*?<\/script>/, "");
            }
            return originReturn;
        };
        return descriptor;
    };
}
