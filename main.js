const firstName = "Justyna";
const age = 36;
alert("Witaj drogi odwiedzający");
console.log(firstName);
console.log(age);
console.log(`Witaj drogi odbiorco,nazywam się ${firstName} i mam ${age} lat`);

const calculateOld = (myNumber) => (myNumber + 3) * 7;
console.log(calculateOld(7));

function calculate (myNumber) {
    return (myNumber + 3) * 7;
}
const myResult = calculate(2);
console.log(myResult);

function greet(firstName, age) {
  console.log(`Witaj drogi odbiorco, jestem ${firstName} i mam ${age} lat`);
}
greet(firstName, age);

const test = document.querySelector(".article__title--js");
test.innerHTML = "tekst w ramach pracy domowej JS. DOM.";


function dupka (querySelectorContent, content){
    const dupcia = document.querySelector(querySelectorContent);
    dupcia.innerHTML = content;
}
dupka ('.articles-list__title--js', 'lepiej zeby wyszło');

const humanOne = {
  name: "Łukasz",
  age: 40,
  adress: {
    street: "Milczańska",
    city: "Szczecin",
  },
};

const humanTwo = {
  name: "Gosia",
  age: 25,
  adress: humanOne.adress,
};
console.log(humanTwo);

console.log(humanOne);

function calculateTwo (myNumber) {
return myNumber*4
}
const myResultNew = calculateTwo(10);
console.log(myResultNew);

const hamburger = document.querySelector('.hamburger--js');
hamburger.addEventListener('click', () => {
  const nav = document.querySelector ('.main-navigation--js');
  nav.classList.toggle('main-navigation--open');
})
