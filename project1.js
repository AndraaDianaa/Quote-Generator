// Variables 

let btn = document.querySelector('#new-qoute');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes = [
    {
        quote:` “A room without books is like a body without a soul.” `,
        person: `― Marcus Tullius Cicero`
    },
    {
        quote:`“Live as if you were to die tomorrow. Learn as if you were to live forever.”`,
        person: `― Mahatma Gandhi`
    },{
        quote:`“Without music, life would be a mistake.”`,
        person:`― Friedrich Nietzsche`
    }, {
        quote:`“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”`,
        person:`― Ralph Waldo Emerson`
    }, {
        quote:`“It is better to be hated for what you are than to be loved for what you are not.”`,
        person:`― Andre Gide`
    }, {
        quote:`“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”`,
        person:`― Martin Luther King Jr.`
    }, {
        quote:`“We accept the love we think we deserve.”`,
        person:`― Stephen Chbosky`
    }, {
        quote:`“Don-t walk in front of me… I may not follow
Don-t walk behind me… I may not lead
Walk beside me… just be my friend”`,
person: `― Albert Camus`

    },
    {
        quote:`“In three words I can sum up everything I've learned about life: it goes on.”`,
        person:`― Robert Frost`
    }, {
        quote:`“Be the change that you wish to see in the world.”`,
        person:`― Mahatma Gandhi`
    }, {
        quote:`“You only live once, but if you do it right, once is enough.”`,
        person:`― Mae West`
    }
];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random()* quotes.length);

quote.innerText = quotes[random].quote;
person.innerText = quotes[random].person;
})