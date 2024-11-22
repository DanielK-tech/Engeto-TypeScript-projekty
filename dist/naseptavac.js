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
class BankAccount {
    firstName;
    secondName;
    income;
    expense;
    pin;
    movements;
    currentState;
    constructor(firstName, secondName, pin) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.pin = pin;
        this.income = 0;
        this.expense = 0;
        this.movements = [];
        this.currentState = 0;
    }
    pinChecker(userPin) {
        if (this.pin != userPin) {
            window.location.replace('wrongpin.html');
        }
    }
    #movement(money) {
        this.movements.push(money);
    }
    addMoney(amount) {
        this.income += amount;
        this.#movement(amount);
    }
    removeMoney(amount) {
        this.expense += amount;
        this.#movement(-amount);
    }
    moneyInAccount() {
        return this.currentState = this.income + this.expense;
    }
    listingCurrentState(whereToList) {
        whereToList.textContent = '';
        const newParagraph = document.createElement("p");
        newParagraph.textContent = this.moneyInAccount().toString();
        whereToList.append(newParagraph);
    }
    writeOutMovements(whereToList) {
        this.movements.forEach((oneMovement) => {
            whereToList.textContent = '';
            const newParagraph = document.createElement("p");
            newParagraph.textContent = oneMovement.toString();
            whereToList.append(newParagraph);
        });
    }
}
const account1 = new BankAccount("David", "Šetek", 1234);
window.onload = function () {
    const dialog = document.getElementById('pinDialog');
    dialog.showModal();
    const cancelBtn = document.getElementById('cancelBtn');
    cancelBtn.addEventListener('click', () => {
        dialog.close();
    });
    const confirmBtn = document.getElementById('confirmBtn');
    confirmBtn.addEventListener('click', () => {
        const userPin = parseInt(document.getElementById('userPin').value, 10);
        account1.pinChecker(userPin);
        dialog.close();
    });
};
const form = document.getElementById('BankForm');
const bankInput = document.getElementById('BankInput');
const resultList = document.getElementById('BankResult');
const buttonMovements = document.getElementById('BankMovements');
const allMovementsResult = document.querySelector(".all-movements-result");
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const amount = parseInt(bankInput.value, 10);
    console.log(amount);
    if (amount > 0) {
        account1.addMoney(amount);
    }
    else {
        account1.removeMoney((amount));
    }
    bankInput.value = '';
    account1.listingCurrentState(resultList);
});
buttonMovements.addEventListener('click', () => {
    account1.writeOutMovements(allMovementsResult);
});
const dialog = document.getElementById('myDialog');
const openDialogButton = document.getElementById('openDialog');
const result = document.getElementById('result');
const select = document.getElementById('dialog-try');
openDialogButton.addEventListener('click', () => {
    dialog.showModal();
});
dialog.addEventListener('close', () => {
    result.textContent = `Dialog byl zavřen s value: ${select.value}`;
});
const quoteSections = document.getElementById('ApiSatelite');
const htmlToWebsite = (htmlTag, content, whereToAdd) => {
    const tag = document.createElement(htmlTag);
    tag.textContent = content;
    whereToAdd.append(tag);
};
const linkToWebsite = (linkContent, urlAddress, whereToAdd) => {
    const newLink = document.createElement("a");
    newLink.textContent = linkContent;
    newLink.href = urlAddress;
    newLink.classList.add("link");
    newLink.target = "_blank";
    whereToAdd.append(newLink);
};
let latitude;
let longitude;
const request = fetch('http://api.open-notify.org/iss-now.json')
    .then((response) => {
    loader.style.display = 'block';
    return response.json();
})
    .then((data) => {
    latitude = data.iss_position.latitude;
    longitude = data.iss_position.longitude;
    htmlToWebsite("p", `Zeměpisná Šířka: ${latitude}`, quoteSections);
    htmlToWebsite("p", `Zeměpisná Délka: ${longitude}`, quoteSections);
    const url = `https://mapy.cz/zakladni?source=muni&ds=2&x=${longitude}&y=${latitude}&z=9`;
    linkToWebsite("Zobrazit na mapy.cz", url, quoteSections);
    console.log(data);
})
    .finally(() => {
    loader.style.display = 'none';
});
