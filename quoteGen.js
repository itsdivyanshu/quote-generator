// variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
    quote: "There are two types of people in the world: those with a gun, and those who dig."
,
    person: 'Clint Eastwood as Blondie in The Good, the Bad and the Ugly (1966)'
    },
    {
    quote: "Keep your head down and your powder dry.",
    person: 'Mark Wahlberg as Dignam in The Departed (2006)'
    },
    {
    quote: "Do it now or forever wish you had!",
    person: 'Cristopher Walken ias Wilbur Turnblad in Hairspray (2007)'
    },
    {
    quote: "He can't see without his glasses!",
    person: 'Anna Chlumsky as Vada Sultenfuss in My Girl (1991)'
    },
    {
    quote: "Frankly, my dear, I don't give a damn.",
    person: 'Clark Gable as Rhett Butler in Gone with the Wind (1939)'
    },
];

btn.addEventListener('click', function() {
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;

}) 