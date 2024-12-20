"use strict";
const tlacitko = document.getElementById("button");
const kostka = document.getElementById("Cubes");
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
        vyhra.classList.add('resultW');
        const vyhraObrazek = document.createElement("img");
        vyhraObrazek.src = "./img/win.gif";
        vyhraObrazek.classList.add('resultW');
        vysledky.appendChild(vyhra);
        vysledky.appendChild(vyhraObrazek);
        const deleteTemporary = document.querySelectorAll(".temporary");
        deleteTemporary.forEach((element) => element.remove());
    }
    else if (pocetHozeni === 4 && soucet < 18) {
        const prohra = document.createElement("h2");
        prohra.textContent = "Prohrál jsi!!";
        prohra.classList.add('resultL');
        const prohraObrazek = document.createElement("img");
        prohraObrazek.src = "./img/lost.gif";
        prohraObrazek.classList.add('resultL');
        vysledky.appendChild(prohra);
        vysledky.appendChild(prohraObrazek);
        const deleteTemporary = document.querySelectorAll(".temporary");
        deleteTemporary.forEach((element) => element.remove());
    }
    if (pocetHozeni === 5) {
        resetGame();
    }
};
const resetGame = () => {
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
const firtSection = document.getElementById('FirstSection');
const secondSection = document.getElementById('SecondSection');
const thirdSection = document.getElementById('ThirdSection');
const whisperSection = document.getElementById('Whisper');
const quoteSection = document.getElementById('Citation');
const sections = [
    { link: 'FirstSection', target: 'Cube' },
    { link: 'SecondSection', target: 'Whisper' },
    { link: 'ThirdSection', target: 'Citation' }
];
const elements = sections.map(section => ({
    link: document.getElementById(section.link),
    target: document.getElementById(section.target)
}));
const scrollToSection = (e, target) => {
    e.preventDefault();
    if (target) {
        const offset = window.innerHeight * 0.15;
        const targetPosition = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
        });
    }
};
elements.forEach(({ link, target }) => {
    if (link && target) {
        link.addEventListener('click', (e) => scrollToSection(e, target));
    }
});
const scrollImage = document.getElementById('Scroll');
let lastScrollTop = 0;
const handleScroll = () => {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    if (scrollTop > lastScrollTop) {
        scrollImage.style.display = 'block';
        scrollImage.style.animation = 'rotate-left 1s linear infinite';
    }
    else {
        scrollImage.style.display = 'block';
        scrollImage.style.animation = 'rotate-right 1s linear infinite';
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    clearTimeout(scrollImage.hideTimeout);
    scrollImage.hideTimeout = setTimeout(() => {
        scrollImage.style.display = 'none';
    }, 100);
};
window.addEventListener('scroll', handleScroll);
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
const citationBox = document.getElementById('Quote-box');
const citationText = document.querySelector('.citation-quote');
const autor = document.querySelector('.citation-name');
const googleBTN = document.querySelector('.google-btn');
const nextCitation = document.querySelector('.next-quote');
const loader = document.getElementById('Loader');
const quotes = [
    {
        text: 'Kdo chce, hledá způsob. Kdo nechce, hledá důvod',
        author: 'Jan Werich'
    },
    {
        text: 'Pokud máš odvahu říci „sbohem“, život tě obdaří novým „vítej“.',
        author: 'Paulo Coelho'
    },
    {
        text: 'Odolám všemu kromě pokušení.',
        author: 'Oscar Wilde'
    },
    {
        text: 'Svět je jeviště, ale hra je špatně obsazená.',
        author: 'Oscar Wilde'
    },
    {
        text: 'Nechápu, proč by člověk neměl být stejně krutý jako příroda.',
        author: 'Adolf Hitler'
    },
    {
        text: 'Jednoho dne mi bylo jasné, že bych se chtěl stát malířem, akademickým malířem.',
        author: 'Adolf Hitler'
    },
    {
        text: 'Schengen není funkční, upřednostňuji státní hranice. Dotace nechávejte u brány',
        author: 'Andrej Babiš'
    },
    {
        text: 'Ve vztahu k ďáblům se lidé mohou dopustit dvou stejně závažných chyb. První z nich by bylo nevěřit v jejich existenci. Druhou chybou je v ně věřit.',
        author: 'C. S. Lewis'
    },
    {
        text: 'Osvícení je prázdno mezi myšlenkami.',
        author: 'Eckhart Tolle'
    },
    {
        text: 'Když se dostanete do souboje, musíte nepříteli dát pocítit, že prohrává, a to za pomocí čehokoli, co máte zrovna k dispozici.',
        author: 'Winston Churchill'
    }
];
const loading = () => {
    loader.style.display = 'block';
    citationBox.style.display = 'none';
};
const hideLoading = () => {
    if (loader.style.display === 'block') {
        loader.style.display = 'none';
        citationBox.style.display = 'block';
    }
};
const getQuote = () => {
    loading();
    setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * quotes.length);
        if (citationText) {
            citationText.textContent = quotes[randomNumber].text;
        }
        if (autor) {
            autor.textContent = quotes[randomNumber].author;
        }
        hideLoading();
    }, 3000);
};
const googleSearch = () => {
    if (citationText && autor) {
        const quote = citationText.textContent;
        const author = autor.textContent;
        const url = `https://www.google.com/search?q=${quote} : ${author}`;
        window.open(url, '_blank');
    }
};
loading();
getQuote();
if (googleBTN && nextCitation) {
    googleBTN.addEventListener('click', googleSearch);
    nextCitation.addEventListener('click', getQuote);
}
