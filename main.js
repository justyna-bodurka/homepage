const firstName = "Justyna";
const age = 36;
alert("Witaj drogi odwiedzający");
console.log(firstName);
console.log(age);
console.log(`Witaj drogi odbiorco,nazywam się ${firstName} i mam ${age} lat`);
const test = document.querySelector(".article__title--js");
test.innerHTML =
  "tekst w ramach pracy domowej JS. DOM. document.querySelektor, nazwa zmiennej QuerySelektor.innerHTML";

const calculateOld = (myNumber) => (myNumber + 3) * 7;
console.log(calculateOld(7));

function dupka (myNumber) {
   onsole.log(`siema ${myNumber}`)
}

const dupka = myNumber => { console.log(`siema ${myNumber}`) }


const calculate = (myNumber) => (myNumber + 3) * 7;
const myResult = calculate(2);
console.log(myResult);

function greet (firstName, age){
    console.log(`Witaj drogi odbiorco, jestem ${firstName} i mam ${age} lat`);
}
greet(firstName, age);

const humanOne= {
    name: "Łukasz",
    age: 40,
    adress:{
        street: "Milczańska",
        city: "Szczecin",
    }
}

const humanTwo= {
    name: "Gosia",
    age: 25,
    adress: humanOne.adress
}
console.log (humanTwo);

console.log(humanOne);

