// Vytvoření tuple
let car: [string, string, number, boolean];

// Naplnění tuple
car = ['Tesla', 'Model 3', 2022, true];

// Výpis do konzole pomocí destructuringu
const [brand, model, year, isElectric] = car;

console.log(`Značka: ${brand}`);
console.log(`Model: ${model}`);
console.log(`Rok výroby: ${year}`);
console.log(`Elektrické: ${isElectric ? 'ano' : 'ne'}`); //<= pokud je true tak vypíše ano, jinak ne

/* Vytvoř type alias s názvem userInfo, který bude obsahovat pole, kde budou tři hodnoty. První bude string, druhá number a třetí boolean. Hodnoty budou představovat jméno, věk a zda je uživatel aktivní. Následně vytvoř tři tuple s tímto type aliasem (user1, user2, user3) a naplň je konkrétními hodnotami. Vypiš obsah tří tuples do konzole. Stačí vypsat obsah user1, user2 a user3 */ 

type userInfo = [string, number, boolean]; 

let user1: userInfo = ['Petr', 25, true]; 
let user2: userInfo = ['Karel', 30, false]; 
let user3: userInfo = ['Jana', 35, true]; 

console.log(user1); 
console.log(user2); 
console.log(user3); 

//Enum 
enum trafficLights {
    RED = 'red',
    ORANGE = 'orange', //<= tady určuji hodnoty
    GREEN = 'green'
} 
console.log(trafficLights.RED);
console.log(trafficLights.ORANGE);
console.log(trafficLights.GREEN);

// 
enum DAYS {
    MONDAY = 'monday',
    TUESDAY = 'tuesday',
    WEDNESDAY = 'wednesday',
    THURSDAY = 'thursday',
    FRIDAY = 'friday',
    SATURDAY = 'saturday',
    SUNDAY = 'sunday'
} 
const isWeekend = (day: DAYS): boolean => {
    return day === DAYS.SATURDAY || day === DAYS.SUNDAY;
};
// false 
console.log(isWeekend(DAYS.MONDAY)); 
// 

enum UserRole { 
    ADMIN = 'admin', 
    USER = 'user',
    GUEST = 'guest'
} 

const getUserRole = (role: UserRole): string => {
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

// 
enum  PROCESS { 
    PENDING = 'Čeká se', 
    IN_PROGRESS = 'Odesílá se', 
    DONE = 'dodesíláno', 
    FAILED = 'Zrušená'
} 

const getProcess = (process: PROCESS): string => {
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

// Interface - dědění pomocí `extends`
interface Animal {
    species: string | null;
}

interface Dog extends Animal {
    breed: string;
}

const myDog: Dog = {
    species: "Canis lupus familiaris",
    breed: "Golden Retriever",
}; 

/*  
// Type alias - kombinace pomocí `&`
type AnimalType = {
  species: string;
};

type DogType = AnimalType & {breed: string;};

const yourDog: DogType = {
  species: "Canis lupus familiaris",
  breed: "Golden Retriever",
}; 
*/
/************************************************************************************************************** */
// znovuotevření interface
/* 
interface Product {
  name: string;
}

interface Product {
  price: number;
}

// Musí obsahovat jak name, tak i price
const firstProduct: Product = {
  name: 'Postavička Captain Amerika',
  price: 599,
} 
  */
/************************** ******************************************************************* */
/* 

// Vytvoření type aliasu
type PersonType = {
  name: string,
  age: number,
  greet(): void,
}

// Vytvoření konkrétního člověka
const person1: PersonType = {
  name: 'Bob',
  age: 23,
  greet() {
    console.log(`Ahoj, já jsem ${this.name}`);
  }
}

// Vypsání všech informací do konzole
console.log(person1.name);
console.log(person1.age);
person1.greet(); 
*/ 

// Vytvoření interfacu
interface Person {
    name: string;
    age: number;
    greet(): void;
}
// Vytvoření konkrétního člověka
const person1: Person = {
    name: 'Alice',
    age: 20,
    greet() {
        console.log(`Ahoj, já jsem ${this.name}`);
    }
}
// Vypsání všech informací do konzole
console.log(person1.name);
console.log(person1.age);
person1.greet(); 
// 

/* třída 

*/ 
// Logika kódu
class Book {
    public readonly title: string;
    public readonly author: string;
    public readonly year: number;
    public readonly material: string = "paper";
    private bookNumber: string;

    constructor(title: string, author: string, year: number, bookNumber: string) {
        this.title = title;
        this.author = author;
        this.year = year;
        this.bookNumber = bookNumber;
    }

    private bookInfo() {
        return `${this.title} je kniha, kterou napsal/a ${this.author}. <br> Byla vydána v roce ${this.year}. <br> Knížku najdete pod označením ${this.bookNumber}`;
    }

    public addToWebsite(tag: string, whereToAdd: HTMLElement) {
        const htmlTag = document.createElement(tag);
        htmlTag.innerHTML = this.bookInfo();
        whereToAdd.append(htmlTag)
    }
}

// Použití logiky
const bookSection = document.getElementById('books') as HTMLElement;

const book1 = new Book(
    "Harry Potter a Kámen mudrců",
    "J. K. Rowling",
    1997,
    "46fds54a6dfs"
);

const book2 = new Book(
    "Harry Potter a Tajemná komnata",
    "J. K. Rowling",
    1998,
    "789rw9erw978r9"
);

const book3 = new Book(
    "Harry Potter a vězeň z Azkabanu",
    "J. K. Rowling",
    1999,
    "156fd4s65dds6f"
);

book1.addToWebsite('p', bookSection);
book2.addToWebsite('p', bookSection);
book3.addToWebsite('p', bookSection);