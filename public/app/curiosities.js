import hapticFeedback from "./utils/hapticFeedback";
import { curiosities } from "../data/curiositiesData";
const curiositiesImg = document.getElementById('curiositiesImg');
const curiositiesTitle = document.getElementById('curiositiesTitle');
const curiositiesText = document.getElementById('curiositiesText');
const curiositiesList = document.getElementById('curiositiesList');
for (let i = 1; i < curiosities.length; i++) {
    const li = document.createElement('li');
    li.classList.add('curiosities-list-item');
    li.innerHTML = curiosities[i].nome;
    curiositiesList.appendChild(li);
}
const links = document.querySelectorAll(".curiosities-list-item");
const removeClass = () => {
    for (let i = 0; i < links.length; i++) {
        links[i].classList.remove("curiosities-list-item-active");
    }
};
const setContent = (id) => {
    curiositiesImg.setAttribute('src', curiosities[id].img);
    curiositiesTitle.innerHTML = curiosities[id].title;
    curiositiesText.innerHTML = curiosities[id].text;
};
for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", () => {
        hapticFeedback();
        removeClass();
        links[i].classList.add("curiosities-list-item-active");
        setContent(i);
    });
}
const curiositiesButton = document.getElementById('curiositiesButton');
curiositiesButton.addEventListener('click', () => {
    hapticFeedback();
    curiositiesTitle.setAttribute('style', 'display: block');
    curiositiesText.setAttribute('style', 'display: block');
    curiositiesButton.setAttribute('style', 'display: none');
});
