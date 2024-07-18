import hapticFeedback from "./utils/hapticFeedback";

const curiositiesButter = document.getElementById('curiositiesButter') as HTMLLIElement;
const curiositiesSugar = document.getElementById('curiositiesSugar') as HTMLLIElement;
const curiositiesEggs = document.getElementById('curiositiesEggs') as HTMLLIElement;
const curiositiesMilk = document.getElementById('curiositiesMilk') as HTMLLIElement;

const curiositiesImg = document.getElementById('curiositiesImg') as HTMLImageElement;
const curiositiesText = document.getElementById('curiositiesText') as HTMLParagraphElement;
const curiositiesTitle = document.getElementById('curiositiesTitle') as HTMLHeadingElement;

const curiosities = [
  {
    id: 0,
    img: '/assets/img/curiosities_butter.webp',
    title: 'A Alma dos Bolos Irresistíveis',
    text: '🧈✨ Começamos esta série revelando o segredo da nossa principal receita: MASSA AMANTEIGADA. <br> 🍰 A manteiga proporciona uma maciez e leveza incomparáveis, garantindo bolos com sabor inigualável e textura irresistível. <br>🔹 <span>Sabor e Textura</span>: A gordura da manteiga derrete na massa, criando aquela sensação deliciosa de derreter na boca. <br>🔹 <span>Cor e Aroma</span>: Durante o cozimento, a manteiga carameliza, dando uma cor dourada e um aroma tentador! 😍✨<br>🔹 <span>Estrutura</span>: A manteiga ajuda a formar a estrutura do bolo, resultando em uma massa estável e macia.<br>Venha descobrir o que torna nossos bolos tão especiais! Experimente nossos bolos que são puro sabor!😋'
  }, {
    id: 1,
    img: '/assets/img/curiosities_sugar.webp',
    title: 'Doçura, Sabor e Textura Perfeita',
    text: '🍰✨O açúcar é a estrela que adoça o bolo e realça todos os sabores! 😋✨<br>🛡️<span>Estrutura</span>: Sabia que o açúcar ajuda a formar a estrutura perfeita do bolo antes que o amido endureça?<br>Isso garante aquela textura macia e irresistível! 🧁 🌟<br>🛡️<span>Cor e Aroma</span>: Durante o cozimento, o açúcar carameliza, dando aquela cor dourada linda e um aroma irresistível! 😍🌟<br>🛡️ <span>Conservação</span>: Além de tudo, o açúcar ajuda a manter seu bolo fresquinho por mais tempo, dificultando o crescimento de microrganismos! 🍰🛡️'
  }, {
    id: 2,
    img: '/assets/img/curiosities_eggs.webp',
    title: 'A Magia por Trás da Textura dos Sonhos',
    text: '🌟✨ Os ovos são o toque mágico para uma textura perfeita e aquela cor dourada irresistível! Vamos descobrir como eles fazem toda a diferença: <br>🔹 <span>Textura Impecável</span>: As claras formam uma rede que dá estrutura, enquanto as gemas adicionam leveza e maciez.<br>O resultado? Um bolo firme e ao mesmo tempo fofinho!<br>🔹 <span>Umidade Perfeita</span>: Ricos em água, os ovos mantêm nossos bolos úmidos e deliciosos, garantindo que cada mordida seja uma experiência suculenta e agradável.<br>🔹 <span>Cor Dourada e Sabor Intenso</span>: Graças à Reação de Maillard, os ovos proporcionam uma cor dourada irresistível e intensificam os sabores, deixando nossos bolos ainda mais saborosos.<br>Experimente a magia dos ovos em nossos bolos e sinta a diferença! 🍰💛'
  }, {
    id: 3,
    img: '/assets/img/curiosities_milk.webp',
    title: 'O Segredo da Umidade e do Sabor',
    text: "🥛✨ O leite é o segredo para um bolo perfeito! <br>🥛✨ Ele desempenha um papel crucial nas reações químicas que garantem uma textura macia, um sabor irresistível e aquela cor dourada maravilhosa. <br>🌟🍰 O leite adiciona umidade à massa, o que ajuda a manter o bolo úmido e fofinho.<br>Além disso, suas proteínas contribuem para a estrutura do bolo, ajudando a massa a crescer e a ficar estável. <br>🧁 O leite também melhora a aparência do bolo, dando aquela cor dourada que todos adoram.<br>Sem o leite, não teríamos bolos tão deliciosos e bem estruturados. <br>💕 Quer um bolo incrível ? Não esqueça do leite! 🥛✨"
  }
]

curiositiesButter.addEventListener('click', () => {
  hapticFeedback();
  curiositiesButter.classList.add('curiosities-list-item-active');
  curiositiesSugar.classList.remove('curiosities-list-item-active');
  curiositiesEggs.classList.remove('curiosities-list-item-active');
  curiositiesMilk.classList.remove('curiosities-list-item-active');

  curiositiesImg.setAttribute('src', curiosities[0].img);
  curiositiesTitle.innerHTML = curiosities[0].title;
  curiositiesText.innerHTML = curiosities[0].text;
});

curiositiesSugar.addEventListener('click', () => {
  hapticFeedback();
  curiositiesButter.classList.remove('curiosities-list-item-active');
  curiositiesEggs.classList.remove('curiosities-list-item-active');
  curiositiesMilk.classList.remove('curiosities-list-item-active');
  curiositiesSugar.classList.add('curiosities-list-item-active');

  curiositiesImg.setAttribute('src', curiosities[1].img);
  curiositiesTitle.innerHTML = curiosities[1].title;
  curiositiesText.innerHTML = curiosities[1].text;
});

curiositiesEggs.addEventListener('click', () => {
  hapticFeedback();
  curiositiesButter.classList.remove('curiosities-list-item-active');
  curiositiesSugar.classList.remove('curiosities-list-item-active');
  curiositiesMilk.classList.remove('curiosities-list-item-active');
  curiositiesEggs.classList.add('curiosities-list-item-active');

  curiositiesImg.setAttribute('src', curiosities[2].img);
  curiositiesTitle.innerHTML = curiosities[2].title;
  curiositiesText.innerHTML = curiosities[2].text;
})


curiositiesMilk.addEventListener('click', () => {
  hapticFeedback();
  curiositiesButter.classList.remove('curiosities-list-item-active');
  curiositiesSugar.classList.remove('curiosities-list-item-active');
  curiositiesEggs.classList.remove('curiosities-list-item-active');
  curiositiesMilk.classList.add('curiosities-list-item-active');

  curiositiesImg.setAttribute('src', curiosities[3].img);
  curiositiesTitle.innerHTML = curiosities[3].title;
  curiositiesText.innerHTML = curiosities[3].text;
});

const curiositiesButton = document.getElementById('curiositiesButton') as HTMLButtonElement;

curiositiesButton.addEventListener('click', () => {
  hapticFeedback();
  curiositiesTitle.setAttribute('style', 'display: block');
  curiositiesText.setAttribute('style', 'display: block');
  curiositiesButton.setAttribute('style', 'display: none');
});
