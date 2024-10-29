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
/************************************************************************************************** */
/****************************************************************************************************                
 *                                      Navigace
 ****************************************************************************************************/
const firtSection = document.getElementById('FirstSection') as HTMLAnchorElement;
const secondSection = document.getElementById('SecondSection') as HTMLAnchorElement;
const thirdSection = document.getElementById('ThirdSection') as HTMLAnchorElement;
//sekce 
const cubeSection = document.getElementById('Cube') as HTMLElement;
const whisperSection = document.getElementById('Whisper') as HTMLElement;
const quoteSection = document.getElementById('Citation') as HTMLElement;

/** Fce na přesun zjednodušená */
const sections = [
  { link: 'FirstSection', target: 'Cube' },
  { link: 'SecondSection', target: 'Whisper' },
  { link: 'ThirdSection', target: 'Citation' }
];

const elements = sections.map(section => ({
  link: document.getElementById(section.link) as HTMLAnchorElement,
  target: document.getElementById(section.target) as HTMLElement
}));

const scrollToSection = (e: Event, target: HTMLElement): void => {
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

/**************************** */
//scrolující smajlík 
const scrollImage = document.getElementById('Scroll') as HTMLImageElement;
let lastScrollTop = 0;
/**FCE na skroling */
const handleScroll = (): void => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // Scrolling dolů
    scrollImage.style.display = 'block';
    scrollImage.style.animation = 'rotate-left 1s linear infinite';
  } else {
    // Scrolling nahorů
    scrollImage.style.display = 'block';
    scrollImage.style.animation = 'rotate-right 1s linear infinite';
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling

  // Hide the image after a delay
  clearTimeout((scrollImage as any).hideTimeout);
  (scrollImage as any).hideTimeout = setTimeout(() => {
    scrollImage.style.display = 'none';
  }, 100); // potomto  čase se skryje
};
window.addEventListener('scroll', handleScroll);

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

// Pole citátů a autorů
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
]

/**FCE na loader  ****/

const loading = (): void => {
  loader.style.display = 'block';
  citationBox.style.display = 'none';
}

const hideLoading = (): void => {
  if (loader.style.display === 'block') {
    loader.style.display = 'none';
    citationBox.style.display = 'block';
  }
}

/*** FCE na získání API ***/
// API
const getQuote = (): void => {
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
  }, 3000); // Zobrazení loaderu na 3 sekundy
}

/** FCE na google tlačítko */
const googleSearch = (): void => {
  if (citationText && autor) {
    const quote = citationText.textContent;
    const author = autor.textContent;
    const url = `https://www.google.com/search?q=${quote} : ${author}`;
    window.open(url, '_blank');
  }
}
/**Před akcí **/
loading()
getQuote()
/**** Akce ****/
if (googleBTN && nextCitation) {
  googleBTN.addEventListener('click', googleSearch);
  nextCitation.addEventListener('click', getQuote);
}