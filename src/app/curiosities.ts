import hapticFeedback from "./utils/hapticFeedback";

const curiositiesButter = document.getElementById('curiositiesButter') as HTMLLIElement;
const curiositiesSugar = document.getElementById('curiositiesSugar') as HTMLLIElement;
const curiositiesEggs = document.getElementById('curiositiesEggs') as HTMLLIElement;

const curiositiesImg = document.getElementById('curiositiesImg') as HTMLImageElement;
const curiositiesText = document.getElementById('curiositiesText') as HTMLParagraphElement;
const curiositiesTitle = document.getElementById('curiositiesTitle') as HTMLHeadingElement;

const curiosities = [
  {
    id: 0,
    img: '/assets/img/curiosities_butter.webp',
    title: 'Ela é indispensável!',
    text: 'Começamos esta série revelando o segredo da nossa principal receita: MASSA AMANTEIGADA. 🧈 <br> 🍰 Com um sabor inigualável e uma textura irresistível, a manteiga proporciona uma maciez e leveza incomparáveis. <br> Venha descobrir o que torna nossos bolos tão especiais! Experimente nossos bolos que são puro sabor!😋'
  }, {
    id: 1,
    img: '/assets/img/curiosities_sugar.webp',
    title: 'Doçura e Sabor!',
    text: '🍰✨O açúcar é a estrela que adoça o bolo e realça todos os sabores! 😋✨<br>🛡️<span>Estrutura</span>: Sabia que o açúcar ajuda a formar a estrutura perfeita do bolo antes que o amido endureça?<br>Isso garante aquela textura macia e irresistível! 🧁 🌟<br>🛡️<span>Cor e Aroma</span>: Durante o cozimento, o açúcar carameliza, dando aquela cor dourada linda e um aroma irresistível! 😍🌟<br>🛡️ <span>Conservação</span>: Além de tudo, o açúcar ajuda a manter seu bolo fresquinho por mais tempo, dificultando o crescimento de microrganismos! 🍰🛡️'
  }, {
    id: 2,
    img: '/assets/img/curiosities_eggs.webp',
    title: 'Segredo do bolo perfeito!',
    text: '🌟✨ Os ovos são o toque mágico para uma textura perfeita e aquela cor dourada irresistível! Vamos descobrir como eles fazem toda a diferença: <br>🔹 <span>Textura Impecável</span>: As claras formam uma rede que dá estrutura, enquanto as gemas adicionam leveza e maciez.<br>O resultado? Um bolo firme e ao mesmo tempo fofinho!<br>🔹 <span>Umidade Perfeita</span>: Ricos em água, os ovos mantêm nossos bolos úmidos e deliciosos, garantindo que cada mordida seja uma experiência suculenta e agradável.<br>🔹 <span>Cor Dourada e Sabor Intenso</span>: Graças à Reação de Maillard, os ovos proporcionam uma cor dourada irresistível e intensificam os sabores, deixando nossos bolos ainda mais saborosos.<br>Experimente a magia dos ovos em nossos bolos e sinta a diferença! 🍰💛'
  }
]

curiositiesButter.addEventListener('click', () => {
  hapticFeedback();
  curiositiesButter.classList.add('curiosities-list-item-active');
  curiositiesSugar.classList.remove('curiosities-list-item-active');
  curiositiesEggs.classList.remove('curiosities-list-item-active');

  curiositiesImg.setAttribute('src', curiosities[0].img);
  curiositiesTitle.innerHTML = curiosities[0].title;
  curiositiesText.innerHTML = curiosities[0].text;
});

curiositiesSugar.addEventListener('click', () => {
  hapticFeedback();
  curiositiesButter.classList.remove('curiosities-list-item-active');
  curiositiesSugar.classList.add('curiosities-list-item-active');
  curiositiesEggs.classList.remove('curiosities-list-item-active');

  curiositiesImg.setAttribute('src', curiosities[1].img);
  curiositiesTitle.innerHTML = curiosities[1].title;
  curiositiesText.innerHTML = curiosities[1].text;
});

curiositiesEggs.addEventListener('click', () => {
  hapticFeedback();
  curiositiesButter.classList.remove('curiosities-list-item-active');
  curiositiesSugar.classList.remove('curiosities-list-item-active');
  curiositiesEggs.classList.add('curiosities-list-item-active');

  curiositiesImg.setAttribute('src', curiosities[2].img);
  curiositiesTitle.innerHTML = curiosities[2].title;
  curiositiesText.innerHTML = curiosities[2].text;
})


const curiositiesButton = document.getElementById('curiositiesButton') as HTMLButtonElement;

curiositiesButton.addEventListener('click', () => {
  hapticFeedback();
  curiositiesTitle.setAttribute('style', 'display: block');
  curiositiesText.setAttribute('style', 'display: block');
  curiositiesButton.setAttribute('style', 'display: none');
});
