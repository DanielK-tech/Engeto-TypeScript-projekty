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

    const vyhraObrazek = document.createElement("img");
    vyhraObrazek.src = "./img/win.gif";

    vysledky.appendChild(vyhra);
    vysledky.appendChild(vyhraObrazek);
    const deleteTemporary = document.querySelectorAll(".temporary");

    deleteTemporary.forEach((element) => element.remove());
  } else if (pocetHozeni === 4 && soucet < 18) {
    const prohra = document.createElement("h2");
    prohra.textContent = "Prohrál jsi!!";

    const prohraObrazek = document.createElement("img");
    prohraObrazek.src = "./img/lost.gif";

    vysledky.appendChild(prohra);
    vysledky.appendChild(prohraObrazek);
    const deleteTemporary = document.querySelectorAll(".temporary");

    deleteTemporary.forEach((element) => element.remove());
  }
  /** resetování po pátém hodu **/
  if (pocetHozeni === 5) {
    location.reload();
  }
};

const vynulujVysledek = () => {
  location.reload();
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
