"use strict";
const tlacitko = document.getElementById("button") as HTMLButtonElement;
const kostka = document.getElementById("Cube") as HTMLImageElement;
const vynuluj = document.getElementById("zero") as HTMLButtonElement;
const vysledky = document.getElementById("results") as HTMLElement;
const pocetHodu = document.getElementById("counting") as HTMLParagraphElement;
const pocetBodu = document.getElementById("try") as HTMLParagraphElement;

let soucet: number = 0;
let pocetHozeni: number = 0;

/*** fce na hod kostkou ***/
const hodKostkou = (): number | void => {
  const hozeneCislo: number = Math.floor(Math.random() * 6) + 1;
  kostka.src = `./img/${hozeneCislo}.jpg`;
  /** výsledky **/
  const vysledek = document.createElement("p");
  vysledek.classList.add("temporary");
  vysledek.textContent = `Hodili jste číslo: ${hozeneCislo}`;
  vysledky.appendChild(vysledek);
  /** sčítání **/
  soucet += hozeneCislo;
  pocetHozeni += 1;
  /**Hodili jste: */
  pocetHodu.textContent = `Hodili jste: ${soucet}`;
  pocetBodu.textContent = `Počet hodů: ${pocetHozeni}`;
  /** podmínky výhry **/
  if (pocetHozeni <= 4 && soucet >= 18) {
    const vyhra = document.createElement("h2");
    vyhra.textContent = "Vyhrál jsi!!"; 
    vyhra.classList.add('resultW')

    const vyhraObrazek = document.createElement("img");
    vyhraObrazek.src = "./img/win.gif";
    vyhraObrazek.classList.add('resultW');
    vysledky.appendChild(vyhra);
    vysledky.appendChild(vyhraObrazek);
    const deleteTemporary = document.querySelectorAll(".temporary");

    deleteTemporary.forEach((element) => element.remove());
  } else if (pocetHozeni === 4 && soucet < 18) {
    const prohra = document.createElement("h2");
    prohra.textContent = "Prohrál jsi!!"; 
    prohra.classList.add('resultL')

    const prohraObrazek = document.createElement("img");
    prohraObrazek.src = "./img/lost.gif"; 
    prohraObrazek.classList.add('resultL');

    vysledky.appendChild(prohra);
    vysledky.appendChild(prohraObrazek);
    const deleteTemporary = document.querySelectorAll(".temporary");

    deleteTemporary.forEach((element) => element.remove());
  }
  /** resetování po pátém hodu **/
  if (pocetHozeni === 5) {
    resetGame();
  }
}; 
/*** fce na resetování hry ***/
const resetGame = (): void => {
  soucet = 0;
  pocetHozeni = 0;  

  const deletePicA = document.querySelectorAll('.resultW, .resultL');   
  deletePicA.forEach((element) => {
    const imgElement = element;
    imgElement.remove();
  }); 
  
  pocetHodu.textContent = '';
  pocetBodu.textContent = '';
  const deleteTemporary = document.querySelectorAll(".temporary");
  deleteTemporary.forEach((element) => element.remove());
};

const vynulujVysledek = () => {  
  soucet = 0;
  pocetHozeni = 0;

  const deletePicA = document.querySelectorAll('.resultW, .resultL');
  deletePicA.forEach((element) => {
    const imgElement = element;
    imgElement.remove();
  });

  pocetHodu.textContent = '';
  pocetBodu.textContent = '';
  const deleteTemporary = document.querySelectorAll(".temporary");
  deleteTemporary.forEach((element) => element.remove());
};

if (tlacitko && vynuluj) {
  tlacitko.addEventListener("click", hodKostkou);
  vynuluj.addEventListener("click", vynulujVysledek);
}

/****************************************************************************************************** 
 * ***************************************************************************************************
 */

/*                                         Dark mode **/
const switcher = document.querySelector<HTMLInputElement>('.switch input'); //<= input
const themeText = document.querySelector<HTMLParagraphElement>('.switcher-description p');
const themeIcon = document.querySelector<HTMLElement>('.switcher-description i');
const navigation = document.getElementById('navigace') as HTMLElement; //<= něco vymyslím  
/*** FCE na texty a ikonky */
const darkMode = (): void => {
  if (themeText && themeIcon) {
    themeText.textContent = 'Dark Mode';
    themeIcon.classList.replace('fa-sun', 'fa-cloud-moon'); //<= změna třídy z fa-sun na fa-cloud-moon
  }
}

const lightMode = (): void => {
  if (themeText && themeIcon) {
    themeText.textContent = 'Light Mode';
    themeIcon.classList.replace('fa-cloud-moon', 'fa-sun');
  }
}

/** FCE na přepínání módu **/
const switchTheme = (event: Event) => {
  const target = event.target as HTMLInputElement; //<= natypování inputu  
  if (target.checked) { //<= pokud je čeknutý :))
    document.documentElement.setAttribute('data-theme', 'light'); //<= změní data-theme co mám v css
    lightMode();
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    darkMode();
  }
}

/** Akce  ***/
if (switcher) {
  switcher.addEventListener('change', switchTheme);
} 
/********************************************************************************************** */ 
/********************************************************************************************** */ 

/************************* Citáty ******** */ 
const citationBox = document.getElementById('Quote-box') as HTMLDivElement;
const citationText = document.querySelector<HTMLParagraphElement>('.citation-quote'); 
const autor = document.querySelector<HTMLParagraphElement>('.citation-name');
const googleBTN = document.querySelector<HTMLButtonElement>('.google-btn'); 
const nextCitation = document.querySelector('.next-quote') as HTMLButtonElement;
const loader = document.getElementById('Loader') as HTMLDivElement; 


