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
function searchClicker():void {
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

/*** Kontrola KapsoLoku */ 
function controling(event: KeyboardEvent) { 
    if (event.getModifierState("CapsLock")) {
        warningText.style.display = "block";
    } else {
        warningText.style.display = "none"
    }
} 

/*** fce na tlačítko kopírovat *******/ 
function copyFunction():void { 
    const copyText = input as HTMLInputElement; 
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices 
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value); 
    // Alert the copied text
    alert("Copied the text: " + copyText.value);


}