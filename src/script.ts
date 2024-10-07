const tlacitko = document.getElementById('button') as HTMLButtonElement; 
const kostka = document.getElementById('Cube') as HTMLImageElement; 
const vynuluj = document.getElementById('zero') as HTMLButtonElement;
const vysledky = document.getElementById('results') as HTMLElement;  
const pocetHodu = document.getElementById('counting') as HTMLParagraphElement; 
const pocetBodu = document.getElementById('try') as HTMLParagraphElement;

let soucet: number = 0; 
let pocetHozeni: number = 0;

/*** fce na hod kostkou ***/ 
const hodKostkou = (): number | void => { 
    const hozeneCislo: number = Math.floor(Math.random() * 6) + 1; 
    kostka.src = `./img/${hozeneCislo}.jpg`;      
    /** výsledky **/ 
    const vysledek = document.createElement('p');
    vysledek.textContent = `Hodili jste číslo: ${hozeneCislo}`;
    vysledky.appendChild(vysledek); 
    /** sčítání **/ 
   soucet += hozeneCislo;  
   pocetHozeni += 1;
   /**Hodili jste: */ 
   pocetHodu.textContent = `Hodili jste: ${soucet}`; 
   pocetBodu.textContent = `Počet hodů: ${pocetHozeni}`;
} 

const vynulujVysledek = () => { 
    location.reload();
}

if (tlacitko && vynuluj){ 
    tlacitko.addEventListener('click', hodKostkou); 
    vynuluj.addEventListener('click', vynulujVysledek);
}