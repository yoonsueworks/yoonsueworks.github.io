const quotes = [
  {
    quote:
      `"How many children are you friends with?"`,
    author: `- Robin.`,
  },
  {
    quote:
      `"You can’t spell America without Erica."`,
    author: `- Erica.`,
  },
  {
    quote: `"You shouldn’t like things because people tell you you’re supposed to."`,
    author: `- Jonathan.`,
  },
  {
    quote:
      `"Watergate!"`,
    author: `- Dustin.`,
  },
  {
    quote:
      `"Make mistakes, learn from them and when life hurts you, because it will, 
      remember the hurt. The hurt is good. It means you’re out of that cave."`,
    author: `- Chief Hop.`,
  },
  {
    quote: `"I don’t care if anyone believes me."`,
    author: `- Joyce.`,
  },
  {
    quote:
      `"Friends don’t lie."`,
    author: `- Eleven.`,
  },
  {
    quote:
      `"You know, out of all of my brother’s friends, you’re my favorite. 
      You’ve always been my favorite."`,
    author: `- Nancy Wheeler.`,
  },
  {
    quote: `"I always thought stuff like this happened in movies and comic books."`,
    author: `- Bob Newby.`,
  },
  {
    quote: `"The demogorgon – it got me. See you tomorrow."`,
    author: `- Will.`,
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;