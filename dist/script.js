"use strict";
const tlacitko = document.getElementById('button');
const kostka = document.getElementById('Cube');
const hodKostkou = () => {
    const hozeneCislo = Math.floor(Math.random() * 6) + 1;
    kostka.src = `./img/${hozeneCislo}.jpg`;
};
if (tlacitko && kostka) {
    tlacitko.addEventListener('click', hodKostkou);
}
