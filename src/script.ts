const tlacitko = document.getElementById('button') as HTMLButtonElement; 
const kostka = document.getElementById('Cube') as HTMLImageElement; 

/*** fce na hod kostkou ***/ 
const hodKostkou = () => { 
    const hozeneCislo = Math.floor(Math.random() * 6) + 1; 
    kostka.src = `./img/${hozeneCislo}.jpg`;
}

if (tlacitko && kostka){ 
    tlacitko.addEventListener('click', hodKostkou)
}