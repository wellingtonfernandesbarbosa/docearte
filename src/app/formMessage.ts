import hapticFeedback from "./utils/hapticFeedback";

const nameInput = document.querySelector("#name") as HTMLInputElement;
const dateInput = document.querySelector("#date") as HTMLInputElement;
const eventInput = document.querySelector("#event") as HTMLInputElement;
const guestsInput = document.querySelector("#guests") as HTMLInputElement;
const preferencesInput = document.querySelector("#preferences") as HTMLTextAreaElement;

const formButton = document.querySelector("#formButton") as HTMLAnchorElement;

formButton.addEventListener('click', () => {
  hapticFeedback();
})

export const formMessage = (): void => {
  document.addEventListener("DOMContentLoaded", () => {

    nameInput.addEventListener('input', () => {
      messageFormatting();
    })

    dateInput.addEventListener('input', () => {
      messageFormatting();
    })

    eventInput.addEventListener('input', () => {
      messageFormatting();
    })

    guestsInput.addEventListener('input', () => {
      messageFormatting();
    })

    preferencesInput.addEventListener("input", () => {
      messageFormatting();
    });

    preferencesInput.value = "";
  });
}

function messageFormatting(): void {
  const message: string = encodeURIComponent(`Olá, estou interessado em encomendar um bolo, para ${eventInput.value != "Outro"
    ? ` um ${eventInput.value.toLowerCase()}, ` : ''
    } ${dateInput.value != ''
      ? `o dia ${new Date(dateInput.value).toLocaleDateString()}, `
      : "dia não informado, "
    } ${guestsInput.value != ''
      ? `para ${guestsInput.value} pessoas, `
      : "número de convidados não informado,"
    } ${preferencesInput.value != ''
      ? `idéias: ${preferencesInput.value}. `
      : "idéias: não informado."
    }\nObrigado(a), ${nameInput.value}.`);
  ;
  formButton.setAttribute('href', `https://wa.me/+5531997706644?text=${message}`);
}


