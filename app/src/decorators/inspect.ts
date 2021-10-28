export function inspect() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        const originMethod = descriptor.value;
        descriptor.value = function(...args:Array<any>){
            console.log(`---Method: ${propertyKey}`);
            console.log(`------Params: ${JSON.stringify(args)}`);
            const returnMethod = originMethod.apply(this, args);
            console.log(`------ return ${JSON.stringify(returnMethod)}`);
            return returnMethod;
        }
        return descriptor;
    }
}