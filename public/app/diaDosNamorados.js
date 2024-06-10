"use strict";
const diaDosNamoradosButton = document.querySelector('#diaDosNamoradosButton');
const diaDosNamoradosSection = document.querySelector('.diaDosNamorados-section');
const diaDosNamoradosCallToAction = document.querySelector('.diaDosNamorados-callToAction');
diaDosNamoradosButton.addEventListener('click', () => {
    diaDosNamoradosCallToAction.style.display = 'none';
    diaDosNamoradosSection.style.display = 'flex';
});
