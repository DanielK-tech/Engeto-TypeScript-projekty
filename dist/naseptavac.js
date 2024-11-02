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
const copyButton = document.getElementById('Copy');
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
if (input && searchButton && copyButton) {
    input.addEventListener('keyup', showAutocompleteResults);
    searchButton.addEventListener('click', searchClicker);
    input.addEventListener('keyup', controling);
    copyButton.addEventListener('click', copyFunction);
}
function controling(event) {
    if (event.getModifierState("CapsLock")) {
        warningText.style.display = "block";
    }
    else {
        warningText.style.display = "none";
    }
}
function copyFunction() {
    const copyText = input;
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert("Copied the text: " + copyText.value);
}
const inputCharName = document.getElementById('CharacterName');
const characterSection = document.getElementById('Charakters');
const addCharacterToWebsite = (image, name) => {
    const div = document.createElement('div');
    div.classList.add('character-box');
    const img = document.createElement('img');
    img.src = image;
    div.append(img);
    const p = document.createElement('p');
    p.textContent = name;
    div.append(p);
    return div;
};
const renderCharacters = (characters) => {
    characterSection.textContent = '';
    characters.forEach((character) => {
        if (character.image) {
            const characterProfile = addCharacterToWebsite(character.image, character.name);
            characterSection.append(characterProfile);
        }
    });
};
const getAllCharacters = () => {
    fetch('https://hp-api.onrender.com/api/characters')
        .then(response => response.json())
        .then(data => {
        inputCharName.addEventListener('input', () => {
            const inputValue = inputCharName.value.toLowerCase();
            console.log(inputValue);
            const filteredCharacters = data.filter((oneCharacter) => {
                return oneCharacter.name.toLowerCase().includes(inputValue);
            });
            renderCharacters(filteredCharacters);
            console.log(filteredCharacters);
        });
        renderCharacters(data);
    });
};
getAllCharacters();
