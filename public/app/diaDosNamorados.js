"use strict";
const diaDosNamoradosButton = document.getElementById('diaDosNamoradosButton');
const diaDosNamoradosSection = document.getElementById('diaDosNamorados-section');
const diaDosNamoradosCallToAction = document.querySelector('.diaDosNamorados-callToAction');
diaDosNamoradosButton.addEventListener('click', () => {
    diaDosNamoradosCallToAction.style.display = 'none';
    diaDosNamoradosSection.style.display = 'flex';
    console.log("dia dos namorados");
});
