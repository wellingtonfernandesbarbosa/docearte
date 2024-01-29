// genereate js docs for this variables
/**
 * @type {HTMLInputElement}
 * @const nameInput - The name input.
 * @const dateInput - The date input.
 * @const eventInput - The event input.
 * @const guestsInput - The guests input.
 * @const preferencesInput - The preferences input.
 * @const formButton - The form button.
 */
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

/**
 * Formats a message for ordering a special cake for a special occasion.
 *
 * @return {string} The formatted message for cake ordering.
 */
function messageFormatting() {
  const message = `Olá Doce Artes!

    Estou interessado em encomendar um bolo especial para uma ocasião especial.\n
    Aqui estão os detalhes:\n
    
    ${
      eventInput.value != ""
        ? `Tipo de Evento: ${eventInput.value} \n`
        : "Tipo de Evento: Não informado\n"
    }
    ${dateInput.value != ""
      ? `Data do Evento: ${dateInput.value}\n`
      : "Data do Evento: Não informado\n"
    }
    ${
      guestsInput.value != ""
        ? `Número de Convidados: ${guestsInput.value}\n`
        : "Numero de Convidados: Não informado\n"
    }
    ${
      preferencesInput.value != ""
        ? `Ideias ou Preferências para o Bolo: ${preferencesInput.value}\n`
        : "Ideias ou Preferências para o Bolo: Não informado\n"
    }

    Gostaria de saber se vocês têm disponibilidade para essa data e um orçamento aproximado. Fico no aguardo de sua resposta!

    Obrigado,
    ${nameInput.value}.`
  ;

  formButton.setAttribute('href', `https://wa.me/5531996464513?text=${message}`);
}
