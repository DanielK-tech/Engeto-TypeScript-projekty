"use strict";
const tlacitko = document.getElementById("button");
const kostka = document.getElementById("Cube");
const vynuluj = document.getElementById("zero");
const vysledky = document.getElementById("results");
const pocetHodu = document.getElementById("counting");
const pocetBodu = document.getElementById("try");
let soucet = 0;
let pocetHozeni = 0;
const hodKostkou = () => {
    const hozeneCislo = Math.floor(Math.random() * 6) + 1;
    kostka.src = `./img/${hozeneCislo}.jpg`;
    const vysledek = document.createElement("p");
    vysledek.classList.add("temporary");
    vysledek.textContent = `Hodili jste číslo: ${hozeneCislo}`;
    vysledky.appendChild(vysledek);
    soucet += hozeneCislo;
    pocetHozeni += 1;
    pocetHodu.textContent = `Hodili jste: ${soucet}`;
    pocetBodu.textContent = `Počet hodů: ${pocetHozeni}`;
    if (pocetHozeni <= 4 && soucet >= 18) {
        const vyhra = document.createElement("h2");
        vyhra.textContent = "Vyhrál jsi!!";
        const vyhraObrazek = document.createElement("img");
        vyhraObrazek.src = "./img/win.gif";
        vysledky.appendChild(vyhra);
        vysledky.appendChild(vyhraObrazek);
        const deleteTemporary = document.querySelectorAll(".temporary");
        deleteTemporary.forEach((element) => element.remove());
    }
    else if (pocetHozeni === 4 && soucet < 18) {
        const prohra = document.createElement("h2");
        prohra.textContent = "Prohrál jsi!!";
        const prohraObrazek = document.createElement("img");
        prohraObrazek.src = "./img/lost.gif";
        vysledky.appendChild(prohra);
        vysledky.appendChild(prohraObrazek);
        const deleteTemporary = document.querySelectorAll(".temporary");
        deleteTemporary.forEach((element) => element.remove());
    }
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
const switcher = document.querySelector('.switch input');
const themeText = document.querySelector('.switcher-description p');
const themeIcon = document.querySelector('.switcher-description i');
const navigation = document.getElementById('navigace');
const darkMode = () => {
    if (themeText && themeIcon) {
        themeText.textContent = 'Dark Mode';
        themeIcon.classList.replace('fa-sun', 'fa-cloud-moon');
    }
};
const lightMode = () => {
    if (themeText && themeIcon) {
        themeText.textContent = 'Light Mode';
        themeIcon.classList.replace('fa-cloud-moon', 'fa-sun');
    }
};
const switchTheme = (event) => {
    const target = event.target;
    if (target.checked) {
        document.documentElement.setAttribute('data-theme', 'light');
        lightMode();
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkMode();
    }
};
if (switcher) {
    switcher.addEventListener('change', switchTheme);
}
