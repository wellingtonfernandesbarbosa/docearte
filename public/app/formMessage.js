const nameInput = document.querySelector("#name");
const dateInput = document.querySelector("#date");
const eventInput = document.querySelector("#event");
const guestsInput = document.querySelector("#guests");
const preferencesInput = document.querySelector("#preferences");
const formButton = document.querySelector("#formButton");
export const formMessage = () => {
    document.addEventListener("DOMContentLoaded", () => {
        console.log("sdasdasdas");
        nameInput.addEventListener('input', () => {
            messageFormatting();
        });
        dateInput.addEventListener('input', () => {
            messageFormatting();
        });
        eventInput.addEventListener('input', () => {
            messageFormatting();
        });
        guestsInput.addEventListener('input', () => {
            messageFormatting();
        });
        preferencesInput.addEventListener("input", () => {
            messageFormatting();
        });
    });
};
function messageFormatting() {
    const message = encodeURIComponent(`Olá, estou interessado em encomendar um bolo, para ${eventInput.value != "Outro"
        ? ` um ${eventInput.value.toLowerCase()}, ` : ''} ${dateInput.value != ''
        ? `o dia ${new Date(dateInput.value).toLocaleDateString()}, `
        : "dia não informado, "} ${guestsInput.value != ''
        ? `para ${guestsInput.value} pessoas, `
        : "número de convidados não informado,"} ${preferencesInput.value != ''
        ? `idéias: ${preferencesInput.value}. `
        : "idéias: não informado."}\nObrigado(a), ${nameInput.value}.`);
    ;
    formButton.setAttribute('href', `https://wa.me/+5531997706644?text=${message}`);
}
