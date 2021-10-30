export function inspect() {
    return function (target, propertyKey, descriptor) {
        const originMethod = descriptor.value;
        descriptor.value = function (...args) {
            console.log(`---Method: ${propertyKey}`);
            console.log(`------Params: ${JSON.stringify(args)}`);
            const returnMethod = originMethod.apply(this, args);
            console.log(`------ return ${JSON.stringify(returnMethod)}`);
            return returnMethod;
        };
        return descriptor;
    };
}
//# sourceMappingURL=inspect.js.map