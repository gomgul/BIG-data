const quotes = [
    {
        quote: "Confidence is contagious",
        author: "Vince Lombardi"
    },
    {
        quote: "Do not follow where the path may lead. GO instead where there is no path and leave a trail",
        author: "Ralph Waldo Emerson"
    },
    {
        quote: "As I grow older, I pay less attention to what men say. I just watch what they do",
        author: "Andrew Carnegie"
    },
    {
        quote: "The best preparation for tomorrow is doing ur best today",
        author: "H.Jackson Brown Jr."
    },
    {
        quote: "It's quite fun to do the impossible",
        author: "Walt Disney"
    }

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");


const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];


quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;