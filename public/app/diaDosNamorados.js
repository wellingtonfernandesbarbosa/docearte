"use strict";
const diaDosNamoradosButton = document.querySelector('#diaDosNamoradosButton');
const diaDosNamoradosSection = document.querySelector('.diaDosNamorados-section');
const diaDosNamoradosCallToAction = document.querySelector('.diaDosNamorados-callToAction');
const flashSaleButton = document.querySelector('#flashSaleButton');
const flashSalecallToAction = document.querySelector('.flashSale-callToAction');
flashSaleButton.addEventListener('click', () => {
    flashSalecallToAction.style.display = 'none';
    diaDosNamoradosSection.style.display = 'flex';
    diaDosNamoradosCallToAction.style.display = 'none';
    window.location.href = '#flashSale';
});
diaDosNamoradosButton.addEventListener('click', () => {
    diaDosNamoradosCallToAction.style.display = 'none';
    diaDosNamoradosSection.style.display = 'flex';
});
