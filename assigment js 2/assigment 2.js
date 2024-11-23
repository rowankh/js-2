const quotes = [
    "“Be yourself; everyone else is already taken.”",
  "“If you tell the truth, you don't have to remember anything.”",
  "“To live is the rarest thing in the world. Most people exist, that is all.”",
  "“Without music, life would be a mistake.”",
  "“A friend is someone who knows all about you and still loves you.”"
];

let currentIndex = 0;

const changeText = () => {

    const textElement = document.getElementById("text");
    textElement.textContent = quotes[currentIndex];

 
    currentIndex = (currentIndex + 1) % quotes.length;
  
};

document.getElementById("quote").addEventListener("click", changeText);

const quotesowner = [
    "-- Oscar Wilde",
  "-- Mark Twain",
  "―- Oscar Wilde",
  "―- Friedrich Nietzsche, Twilight of the Idols",
  "―- Elbert Hubbard"

];

let currentIndex1 = 0;

const changeText1 = () => {

    const textElement = document.getElementById("text2");
    textElement.textContent = quotesowner[currentIndex1];

 
    currentIndex1 = (currentIndex1 + 1) % quotesowner.length;
  
};

document.getElementById("quote").addEventListener("click", changeText1);

