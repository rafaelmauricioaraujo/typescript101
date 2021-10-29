import { Printable } from "./printable.js";

export class Print {
    public toText(...object: Array<Printable>): void {
        for (let item of object) {
            console.log(item.toText());
        }
    }
}
