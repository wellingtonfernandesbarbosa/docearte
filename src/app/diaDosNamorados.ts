const diaDosNamoradosButton = document.querySelector('#diaDosNamoradosButton') as HTMLButtonElement;
const diaDosNamoradosSection = document.querySelector('.diaDosNamorados-section') as HTMLDivElement;
const diaDosNamoradosCallToAction = document.querySelector('.diaDosNamorados-callToAction') as HTMLDivElement;

diaDosNamoradosButton.addEventListener('click', () => {
  diaDosNamoradosCallToAction.style.display = 'none';
  diaDosNamoradosSection.style.display = 'flex';
})
