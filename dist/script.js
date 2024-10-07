"use strict";
const tlacitko = document.getElementById('button');
const kostka = document.getElementById('Cube');
const vynuluj = document.getElementById('zero');
const vysledky = document.getElementById('results');
const pocetHodu = document.getElementById('counting');
const pocetBodu = document.getElementById('try');
let soucet = 0;
let pocetHozeni = 0;
const hodKostkou = () => {
    const hozeneCislo = Math.floor(Math.random() * 6) + 1;
    kostka.src = `./img/${hozeneCislo}.jpg`;
    const vysledek = document.createElement('p');
    vysledek.classList.add('temporary');
    vysledek.textContent = `Hodili jste číslo: ${hozeneCislo}`;
    vysledky.appendChild(vysledek);
    soucet += hozeneCislo;
    pocetHozeni += 1;
    pocetHodu.textContent = `Hodili jste: ${soucet}`;
    pocetBodu.textContent = `Počet hodů: ${pocetHozeni}`;
    if (pocetHozeni <= 4 && soucet >= 18) {
        const vyhra = document.createElement('h2');
        vyhra.textContent = 'Vyhrál jsi!!';
        vysledky.appendChild(vyhra);
        const deleteTemporary = document.querySelectorAll('.temporary');
        deleteTemporary.forEach(element => element.remove());
    }
};
const vynulujVysledek = () => {
    location.reload();
};
if (tlacitko && vynuluj) {
    tlacitko.addEventListener('click', hodKostkou);
    vynuluj.addEventListener('click', vynulujVysledek);
}
