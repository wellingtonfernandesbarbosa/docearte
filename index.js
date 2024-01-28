const nameInput = document.querySelector("#name");
const dateInput = document.querySelector("#date");
const eventInput = document.querySelector("#event");
const guestsInput = document.querySelector("#guests");
const preferencesInput = document.querySelector("#preferences");

const formButton = document.querySelector("#formButton");

document.addEventListener("DOMContentLoaded", function () {
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
});

function messageFormatting() {
  const message = `Olá Doce Artes!

    Estou interessado em encomendar um bolo especial para uma ocasião especial. Aqui estão os detalhes:

    Tipo de Evento: ${eventInput.value}
    Data do Evento: ${dateInput.value}
    Número de Convidados: ${guestsInput.value}
    Ideias ou Preferências para o Bolo: ${preferencesInput.value}

    Gostaria de saber se vocês têm disponibilidade para essa data e um orçamento aproximado. Fico no aguardo de sua resposta!

    Obrigado,
    ${nameInput.value}.`;

  formButton.setAttribute('href', `https://wa.me/5531996964513?text=${message}`);
}

