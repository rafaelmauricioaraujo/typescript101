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
