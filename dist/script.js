"use strict";
const tlacitko = document.getElementById('button');
const kostka = document.getElementById('Cube');
const vysledky = document.getElementById('results');
const hodKostkou = () => {
    const hozeneCislo = Math.floor(Math.random() * 6) + 1;
    kostka.src = `./img/${hozeneCislo}.jpg`;
    const vysledek = document.createElement('p');
    vysledek.textContent = `Hodili jste číslo: ${hozeneCislo}`;
    vysledky.appendChild(vysledek);
};
if (tlacitko && kostka) {
    tlacitko.addEventListener('click', hodKostkou);
}
