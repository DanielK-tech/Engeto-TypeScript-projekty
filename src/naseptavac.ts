const availableKeywords: string[] = [ //<= pole našeptávání
    'Harry Potter',
    'Hermiona Grangerová',
    'Ronald Weasley',
    'Albus Brumbál',
    'Dobby',
    'Rubeus Hagrid'
]

/** Výběry */
const input = document.getElementById('Input') as HTMLInputElement;
const resultBox = document.querySelector('.whisper-result') as HTMLDivElement;
const searchButton = document.getElementById('Search') as HTMLDivElement;
const warningText = document.getElementById('Warning') as HTMLParagraphElement;
const copyButton = document.getElementById('Copy') as HTMLButtonElement;
/** vyhledávací fce  ***/
const showAutocompleteResults = (): void => {
    if (input && resultBox) {
        let inputContent = input.value.toLowerCase(); //<= převod písmen v inputu na malé 
        /** pokud písmenka v inputu odpovídají něčemu v avaiblekeywords tak se nabídnou, jinak vrátí prázdné pole */
        let results = inputContent.length ? availableKeywords.filter(oneKeyword => oneKeyword.toLowerCase().includes(inputContent)) : [];
        if (results.length) {
            display(results);
        } else {
            resultBox.innerHTML = '';
        }
    }
};
/*** fce na tvoření ul a li podle nabídky slov ****/
const display = (array: string[]): void => {
    if (resultBox) {
        const ul = document.createElement('ul');
        array.forEach(oneItem => {
            const li = document.createElement('li');
            li.textContent = oneItem;
            li.addEventListener('click', () => { //<= pokud klikneme na vysledek vyhledávání, přesune se do inputu a ostatní napovědy se promažou
                input.value = oneItem;
                resultBox.innerHTML = '';
            })
            ul.append(li);
        })
        resultBox.innerHTML = '';
        resultBox.append(ul);
    }
}
/**************************************************** */
/** fce na mazaaní obsahu z inputu  **/
function searchClicker(): void {
    if (input) {
        input.value = ''
    }
}
/******* akce  ********/
if (input && searchButton && copyButton) {
    input.addEventListener('keyup', showAutocompleteResults);
    searchButton.addEventListener('click', searchClicker);
    input.addEventListener('keyup', controling)
    copyButton.addEventListener('click', copyFunction);
}

/*** FCE Kontrola KapsoLoku */
function controling(event: KeyboardEvent) {
    if (event.getModifierState("CapsLock")) {
        warningText.style.display = "block";
    } else {
        warningText.style.display = "none"
    }
}

/*** fce na tlačítko kopírovat *******/
function copyFunction(): void {
    const copyText = input as HTMLInputElement;
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices 
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
}
/**API a vyhledávání na Harryho Potterra atd. */

const inputCharName = document.getElementById('CharacterName') as HTMLInputElement;
const characterSection = document.getElementById('Charakters') as HTMLElement;

/** FCE na API */

/** Přidávání do stránky */
const addCharacterToWebsite = (image: string, name: string | null) => {
    const div = document.createElement('div');
    div.classList.add('character-box');
    const img = document.createElement('img');
    img.src = image;
    div.append(img);

    const p = document.createElement('p');
    p.textContent = name;
    div.append(p);
    return div;
}

/** Rendrování podle IMG */
const renderCharacters = (characters: any[]) => {
    characterSection.textContent = '';
    characters.forEach((character) => {
        if (character.image) {
            const characterProfile = addCharacterToWebsite(character.image, character.name);
            characterSection.append(characterProfile);
        }
    })
}
/**Vyhodí vyrendrované výsledky */
const getAllCharacters = (): void => {
    fetch('https://hp-api.onrender.com/api/characters')
        .then(response => response.json())
        .then(data => {
            inputCharName.addEventListener('input', () => {
                const inputValue = inputCharName.value.toLowerCase();
                console.log(inputValue)
                const filteredCharacters = data.filter((oneCharacter: any) => {
                    return oneCharacter.name.toLowerCase().includes(inputValue);
                });
                renderCharacters(filteredCharacters);
                console.log(filteredCharacters)
            });
            renderCharacters(data);
        });
}
getAllCharacters()

//bankovní aplikace za pomocí třídy
class BankAccount {
    firstName: string;
    secondName: string;
    income: number;
    expense: number;
    private pin: number; //možné použít #pin: number;
    movements: number[];
    currentState: number;

    constructor(firstName: string, secondName: string, pin: number) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.pin = pin;
        this.income = 0;
        this.expense = 0;
        this.movements = [];
        this.currentState = 0;
    }
    //metody na pozdější volání
    pinChecker(userPin: number): void {
        if (this.pin != userPin) {
            window.location.replace('wrongpin.html'); //<== přesměrování na jinou stránku
        }
    }
    //metoda na sledování pohybu peněz(privátní) 
    #movement(money: number): void {
        this.movements.push(money);
    }
    //metoda na přidání peněz 
    addMoney(amount: number): void {
        this.income += amount;
        this.#movement(amount); //přidání peněz
    }
    //metoda na odebrání peněz 
    removeMoney(amount: number): void {
        this.expense += amount;
        this.#movement(-amount); //odečtení peněz (číslo s -)
    }
    //metoda na výpis stavu účtu    
    moneyInAccount() {
        return this.currentState = this.income + this.expense
    }
    //metoda na výpis pohybu peněz    
    listingCurrentState(whereToList: HTMLElement) {
        whereToList.textContent = '';
        const newParagraph = document.createElement("p")
        newParagraph.textContent = this.moneyInAccount().toString()
        whereToList.append(newParagraph)
    }
    //metoda na zobrazení pohybů peněz     
    writeOutMovements(whereToList: HTMLElement) {
        this.movements.forEach((oneMovement) => {
            whereToList.textContent = '';
            const newParagraph = document.createElement("p")
            newParagraph.textContent = oneMovement.toString()
            whereToList.append(newParagraph)
        })
    }
}

const account1 = new BankAccount("David", "Šetek", 1234);

//dialogové okno na zadání pinu, při načtení stránky 
window.onload = function () {
    const dialog = document.getElementById('pinDialog') as HTMLDialogElement; //chycení dialogu
    dialog.showModal(); //fce na zobrazení dialogu, dialog.show() <== nemodální dialog

    const cancelBtn = document.getElementById('cancelBtn') as HTMLButtonElement; //tlačítko zrušit (nemusí mít žádnou akci)
    cancelBtn.addEventListener('click', () => {
        dialog.close();

    });

    const confirmBtn = document.getElementById('confirmBtn') as HTMLButtonElement; //tlačítko odeslat
    confirmBtn.addEventListener('click', () => {
        const userPin = parseInt((document.getElementById('userPin') as HTMLInputElement).value, 10); //10tková soustava, input

        account1.pinChecker(userPin);
        dialog.close(); //zavření dialogu
    });
}
/************************************************************************************************* */
//proměnné pro sekci s bankovním účtem 
const form = document.getElementById('BankForm') as HTMLFormElement;
const bankInput = document.getElementById('BankInput') as HTMLInputElement;
const resultList = document.getElementById('BankResult') as HTMLDivElement;
const buttonMovements = document.getElementById('BankMovements') as HTMLButtonElement; //<== tlačítko na zobrazení pohybů peněz
const allMovementsResult = document.querySelector(".all-movements-result") as HTMLDivElement; //<== sekce na zobrazení pohybů peněz
//fce na pohyby peněz na účtu 
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const amount = parseInt(bankInput.value, 10);
    console.log(amount);
    if (amount > 0) {
        account1.addMoney(amount);
    } else {
        account1.removeMoney(/*Math.abs*/(amount));
    }
    bankInput.value = '';
    account1.listingCurrentState(resultList); //připíchnutí do sekce Result      
});

//fce na zobrazení pohybů peněz 
buttonMovements.addEventListener('click', () => {
    account1.writeOutMovements(allMovementsResult);
});

//další dialogové okno, tentokráte na tlačítko 
const dialog = document.getElementById('myDialog') as HTMLDialogElement;
const openDialogButton = document.getElementById('openDialog') as HTMLButtonElement;
const result = document.getElementById('result') as HTMLParagraphElement;
const select = document.getElementById('dialog-try') as HTMLSelectElement;

openDialogButton.addEventListener('click', () => {
    dialog.showModal();
});

dialog.addEventListener('close', () => { //chybí mi nastavení fce na tlačítko cancel
    // result.textContent = `Dialog byl zavřen s returnValue: ${dialog.returnValue}`; 
    // result.textContent = `Dialog byl zavřen s selectedIndex: ${select.selectedIndex}`; 

    result.textContent = `Dialog byl zavřen s: ${select.value}`; //červená hodnota
    // https://udn.realityripple.com/docs/Web/API/HTMLDialogElement/returnValue
});
/***************************************************************************************************************************************************
 * **************************************************************************************************************************************************
 */
//Přidání API o tom, kde je družice ISS 
const quoteSections = document.getElementById('ApiSatelite') as HTMLElement;

//fce na přidělání paragrafu do sekce
const htmlToWebsite = (htmlTag: string, content: string, whereToAdd: HTMLElement): void => {
    const tag = document.createElement(htmlTag)
    tag.textContent = content
    whereToAdd.append(tag)
}

//fce na mapy.cz 
const linkToWebsite = (linkContent: string, urlAddress: string, whereToAdd: HTMLElement): void => {
    const newLink = document.createElement("a")
    newLink.textContent = linkContent
    newLink.href = urlAddress
    newLink.classList.add("link")
    newLink.target = "_blank"; // Otevře odkaz v novém okně
    whereToAdd.append(newLink)
}
//
let latitude: number;
let longitude: number;
const request =
    fetch('http://api.open-notify.org/iss-now.json') //<= API
        .then((response) => {
            // loader.style.display = 'block';
            return response.json();
        })
        .then((data) => {
            latitude = data.iss_position.latitude
            longitude = data.iss_position.longitude
            htmlToWebsite("p", `Zeměpisná Šířka: ${latitude}`, quoteSections)
            htmlToWebsite("p", `Zeměpisná Délka: ${longitude}`, quoteSections)
            const url = `https://mapy.cz/zakladni?source=muni&ds=2&x=${longitude}&y=${latitude}&z=9`;
            linkToWebsite("Zobrazit na mapy.cz", url, quoteSections)
        })
        .finally(() => {
            // loader.style.display = 'none';
        })
/*****************************************************************************************************************************************************
 * ***************************************************************************************************************************************************
 */
/** Další API **/
const countreSection = document.getElementById('Countre') as HTMLElement;
const countreResult = document.querySelector('.country-result') as HTMLElement;
/* Formulář */
const formular = document.getElementById('CountryForm') as HTMLFormElement;
const countryInput = document.getElementById('Country') as HTMLInputElement;
const searchButtonCountry = document.getElementById('CountryButton') as HTMLButtonElement;

/** Fce na vyhledávání */
//fce na paragrafy do sekce 
const paragraphToWebsite = (content: string, whereToAdd: HTMLElement): void => {
    const newParagraph = document.createElement("p")
    newParagraph.textContent = content
    newParagraph.classList.add("paragraph")
    whereToAdd.append(newParagraph)
}
//
const searchCountry = (event: Event) => {
    event.preventDefault();
    const country = countryInput.value;
    const request =
        fetch(`https://restcountries.com/v3.1/name/${country}`)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                countreResult.textContent = '';
                paragraphToWebsite(data[0].capital[0], countreResult)
                paragraphToWebsite(data[0].name.common, countreResult)
                paragraphToWebsite(data[0].region, countreResult)
            })
    countryInput.value = '';
}
/******************************************* */
searchButtonCountry.addEventListener('click', searchCountry)

/*************************************************************************************************************************
 * ***********************************************************************************************************************
 */

// QR kód 
const qrImage = document.getElementById("qrImage") as HTMLImageElement;
const inputText = document.getElementById("qrText") as HTMLInputElement;
const formularQR = document.querySelector("form") as HTMLFormElement;
const QRButton = document.getElementById("QRbutton") as HTMLButtonElement;


//fce na generování QR kódu
const generateQR = (event: Event): void => {
    event.preventDefault();
    if (inputText.value.length > 0) {
        const url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputText.value}`;

        const request =
            fetch(url)
                .then((response): void => {
                    qrImage.src = response.url;
                })
    }
}
//akce na tlačítko
QRButton?.addEventListener('click', generateQR); 

//herní API
