"use strict";
let car;
car = ['Tesla', 'Model 3', 2022, true];
const [brand, model, year, isElectric] = car;
console.log(`Značka: ${brand}`);
console.log(`Model: ${model}`);
console.log(`Rok výroby: ${year}`);
console.log(`Elektrické: ${isElectric ? 'ano' : 'ne'}`);
let user1 = ['Petr', 25, true];
let user2 = ['Karel', 30, false];
let user3 = ['Jana', 35, true];
console.log(user1);
console.log(user2);
console.log(user3);
var trafficLights;
(function (trafficLights) {
    trafficLights["RED"] = "red";
    trafficLights["ORANGE"] = "orange";
    trafficLights["GREEN"] = "green";
})(trafficLights || (trafficLights = {}));
console.log(trafficLights.RED);
console.log(trafficLights.ORANGE);
console.log(trafficLights.GREEN);
var DAYS;
(function (DAYS) {
    DAYS["MONDAY"] = "monday";
    DAYS["TUESDAY"] = "tuesday";
    DAYS["WEDNESDAY"] = "wednesday";
    DAYS["THURSDAY"] = "thursday";
    DAYS["FRIDAY"] = "friday";
    DAYS["SATURDAY"] = "saturday";
    DAYS["SUNDAY"] = "sunday";
})(DAYS || (DAYS = {}));
const isWeekend = (day) => {
    return day === DAYS.SATURDAY || day === DAYS.SUNDAY;
};
console.log(isWeekend(DAYS.MONDAY));
var UserRole;
(function (UserRole) {
    UserRole["ADMIN"] = "admin";
    UserRole["USER"] = "user";
    UserRole["GUEST"] = "guest";
})(UserRole || (UserRole = {}));
const getUserRole = (role) => {
    switch (role) {
        case UserRole.ADMIN:
            return 'Administrátor';
        case UserRole.USER:
            return 'Uživatel';
        case UserRole.GUEST:
            return 'Host';
        default:
            return 'Neznámá role bez povolení';
    }
};
var PROCESS;
(function (PROCESS) {
    PROCESS["PENDING"] = "\u010Cek\u00E1 se";
    PROCESS["IN_PROGRESS"] = "Odes\u00EDl\u00E1 se";
    PROCESS["DONE"] = "dodes\u00EDl\u00E1no";
    PROCESS["FAILED"] = "Zru\u0161en\u00E1";
})(PROCESS || (PROCESS = {}));
const getProcess = (process) => {
    switch (process) {
        case PROCESS.PENDING:
            return 'Čeká se';
        case PROCESS.IN_PROGRESS:
            return 'Odesílá se';
        case PROCESS.DONE:
            return 'Dodesíláno';
        case PROCESS.FAILED:
            return 'Zrušená';
        default:
            return 'Neznámý stav';
    }
};
console.log(getProcess(PROCESS.PENDING));
const myDog = {
    species: "Canis lupus familiaris",
    breed: "Golden Retriever",
};
const person1 = {
    name: 'Alice',
    age: 20,
    greet() {
        console.log(`Ahoj, já jsem ${this.name}`);
    }
};
console.log(person1.name);
console.log(person1.age);
person1.greet();
class Book {
    title;
    author;
    year;
    material = "paper";
    bookNumber;
    constructor(title, author, year, bookNumber) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.bookNumber = bookNumber;
    }
    bookInfo() {
        return `${this.title} je kniha, kterou napsal/a ${this.author}. <br> Byla vydána v roce ${this.year}. <br> Knížku najdete pod označením ${this.bookNumber}`;
    }
    addToWebsite(tag, whereToAdd) {
        const htmlTag = document.createElement(tag);
        htmlTag.innerHTML = this.bookInfo();
        whereToAdd.append(htmlTag);
    }
}
const bookSection = document.getElementById('books');
const book1 = new Book("Harry Potter a Kámen mudrců", "J. K. Rowling", 1997, "46fds54a6dfs");
const book2 = new Book("Harry Potter a Tajemná komnata", "J. K. Rowling", 1998, "789rw9erw978r9");
const book3 = new Book("Harry Potter a vězeň z Azkabanu", "J. K. Rowling", 1999, "156fd4s65dds6f");
book1.addToWebsite('p', bookSection);
book2.addToWebsite('p', bookSection);
book3.addToWebsite('p', bookSection);
