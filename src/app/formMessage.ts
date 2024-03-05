const nameInput = document.querySelector("#name") as HTMLInputElement;
const dateInput = document.querySelector("#date") as HTMLInputElement;
const eventInput = document.querySelector("#event") as HTMLInputElement;
const guestsInput = document.querySelector("#guests") as HTMLInputElement;
const preferencesInput = document.querySelector("#preferences") as HTMLTextAreaElement;

const formButton = document.querySelector("#formButton") as HTMLAnchorElement;

const menuToggle = document.querySelector(".menu-toggle") as HTMLDivElement;

document.addEventListener("DOMContentLoaded", () => {
  menuToggle.addEventListener("click", () => {
    console.log("oi");
  })

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

function messageFormatting(): void {
  const message: string = `Olá Doce Artes!

    Estou interessado em encomendar um bolo para uma ocasião especial. 
    Aqui estão os detalhes: 
    
    ${eventInput.value != ""
      ? `Tipo de evento: ${eventInput.value},  `
      : "Tipo de evento: Não informado, "
    }
    ${dateInput.value != ""
      ? `Data do evento: ${dateInput.value}, `
      : "Data do evento: Não informado, "
    }
    ${guestsInput.value != ""
      ? `Número de convidados: ${guestsInput.value}, `
      : "Numero de convidados: Não informado, "
    }
    ${preferencesInput.value != ""
      ? `Ideias ou preferências para o bolo: ${preferencesInput.value}. `
      : "Ideias ou preferências para o bolo: Não informado."
    }

    Gostaria de saber se vocês têm disponibilidade para essa data e um orçamento aproximado. Fico no aguardo de sua resposta!

    Obrigado(a),
    ${nameInput.value}.`;
  ;

  formButton.setAttribute('href', `https://wa.me/5531996464513?text=${message}`);
}


