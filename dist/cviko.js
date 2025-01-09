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
