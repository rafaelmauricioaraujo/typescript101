export class Print {
    toText(...object) {
        for (let item of object) {
            console.log(item.toText());
        }
    }
}
//# sourceMappingURL=print.js.map