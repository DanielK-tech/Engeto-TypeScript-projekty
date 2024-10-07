const tlacitko = document.getElementById('button') as HTMLButtonElement; 
const kostka = document.getElementById('Cube') as HTMLImageElement; 
const vysledky = document.getElementById('results') as HTMLElement;

/*** fce na hod kostkou ***/ 
const hodKostkou = () => { 
    const hozeneCislo = Math.floor(Math.random() * 6) + 1; 
    kostka.src = `./img/${hozeneCislo}.jpg`; 
    /** výsledky **/ 
    const vysledek = document.createElement('p');
    vysledek.textContent = `Hodili jste číslo: ${hozeneCislo}`;
    vysledky.appendChild(vysledek);
}

if (tlacitko && kostka){ 
    tlacitko.addEventListener('click', hodKostkou)
}