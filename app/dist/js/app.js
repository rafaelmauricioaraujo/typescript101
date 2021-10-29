import { NegotiationController } from "./controllers/negotiation-controller.js";
const controller = new NegotiationController();
const form = document.querySelector(".form");
if (form) {
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        controller.addNegotiation();
    });
}
else {
    throw new Error("Application failed on start up");
}
const importDataButton = document.querySelector("#botao-importa");
if (importDataButton) {
    importDataButton.addEventListener("click", () => {
        controller.dataImport();
    });
}
else {
    throw new Error("Failed to read import button");
}
