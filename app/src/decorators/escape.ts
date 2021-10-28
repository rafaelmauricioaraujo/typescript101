export function escape() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originMethod = descriptor.value;
        descriptor.value = function(...args: Array<any>) {
            let originReturn = originMethod.apply(this, args);
            if(typeof originReturn === "string") {
                originReturn = originReturn.replace(/<script>[\s\S]*?<\/script>/, "");
            }
            return originReturn;
        }
        return descriptor;
    }
}