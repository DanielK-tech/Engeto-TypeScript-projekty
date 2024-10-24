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

const display = (array: string[]): void => { 
    if(resultBox) { 
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
if (input) {
    input.addEventListener('keyup', showAutocompleteResults);
}