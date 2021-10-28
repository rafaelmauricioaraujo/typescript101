
export function runtimeLogin(onMiliSeconds:boolean = false) {
    return function (target: any, propertyKey: string, descriptors: PropertyDescriptor) {
        const originMethod = descriptors.value;
        descriptors.value = function(...args: Array<any>) {
            let divisor = 1;
            let unit = "seconds";
            if(onMiliSeconds) {
                divisor = 1000
                unit = "mili seconnds"
            }
            const t1 = performance.now();
            const methodReturn = originMethod.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey} runtime: ${(t2 - t1)/divisor} ${unit}`);
            methodReturn;
        }
        return descriptors;
    }
}