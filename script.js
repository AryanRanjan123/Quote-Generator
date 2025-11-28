const quotes = [
  { text: "Be kind whenever possible.", author: "Dalai Lama" },
  { text: "Stay positive and happy.", author: "Unknown" },
  { text: "Work hard in silence, let success make the noise.", author: "Frank Ocean" },
  { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { text: "Do what you can, with what you have, where you are.", author: "T. Roosevelt" }
];

function newQuote() {
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");

  quoteElement.classList.add("fade");
  authorElement.classList.add("fade");

  setTimeout(() => {
    const q = quotes[Math.floor(Math.random() * quotes.length)];
    quoteElement.textContent = q.text;
    authorElement.textContent = `– ${q.author}`;
    quoteElement.classList.remove("fade");
    authorElement.classList.remove("fade");
  }, 500);
}

