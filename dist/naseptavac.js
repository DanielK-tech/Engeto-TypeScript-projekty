"use strict";
const availableKeywords = [
    'Harry Potter',
    'Hermiona Grangerová',
    'Ronald Weasley',
    'Albus Brumbál',
    'Dobby',
    'Rubeus Hagrid'
];
const input = document.getElementById('Input');
const resultBox = document.querySelector('.whisper-result');
const searchButton = document.getElementById('Search');
const warningText = document.getElementById('Warning');
const showAutocompleteResults = () => {
    if (input && resultBox) {
        let inputContent = input.value.toLowerCase();
        let results = inputContent.length ? availableKeywords.filter(oneKeyword => oneKeyword.toLowerCase().includes(inputContent)) : [];
        if (results.length) {
            display(results);
        }
        else {
            resultBox.innerHTML = '';
        }
    }
};
const display = (array) => {
    if (resultBox) {
        const ul = document.createElement('ul');
        array.forEach(oneItem => {
            const li = document.createElement('li');
            li.textContent = oneItem;
            li.addEventListener('click', () => {
                input.value = oneItem;
                resultBox.innerHTML = '';
            });
            ul.append(li);
        });
        resultBox.innerHTML = '';
        resultBox.append(ul);
    }
};
function searchClicker() {
    if (input) {
        input.value = '';
    }
}
if (input && searchButton) {
    input.addEventListener('keyup', showAutocompleteResults);
    searchButton.addEventListener('click', searchClicker);
    input.addEventListener('keyup', controling);
}
function controling(event) {
    if (event.getModifierState("CapsLock")) {
        warningText.style.display = "block";
    }
    else {
        warningText.style.display = "none";
    }
}
