const diaDosNamoradosButton = document.querySelector('#diaDosNamoradosButton') as HTMLButtonElement;
const diaDosNamoradosSection = document.querySelector('.diaDosNamorados-section') as HTMLDivElement;
const diaDosNamoradosCallToAction = document.querySelector('.diaDosNamorados-callToAction') as HTMLDivElement;

const flashSaleButton = document.querySelector('#flashSaleButton') as HTMLButtonElement;
const flashSalecallToAction = document.querySelector('.flashSale-callToAction') as HTMLDivElement;

flashSaleButton.addEventListener('click', () => {
  flashSalecallToAction.style.display = 'none';
  diaDosNamoradosSection.style.display = 'flex';
  diaDosNamoradosCallToAction.style.display = 'none';
  window.location.href = '#flashSale';
})

diaDosNamoradosButton.addEventListener('click', () => {
  diaDosNamoradosCallToAction.style.display = 'none';
  diaDosNamoradosSection.style.display = 'flex';
})
