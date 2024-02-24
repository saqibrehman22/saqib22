//  Welcome Massage 

function displayWelcomeMessage() {
  let name = prompt("Welcome! Please enter your name:", "");
  if (name) {
    name = name.trim().charAt(0).toUpperCase() + name.slice(1).toLowerCase();
    alert(`Welcome, ${name}!`);
  } else {
    alert("Welcome!"); 
  }
}
displayWelcomeMessage();

// Generate Quote

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}


function displayQuote() {
  const quoteElement = document.getElementById('quoteDisplay'); 
  const quote = generateQuote();
  quoteElement.innerHTML = quote;
}


displayQuote();\

// Random Number Generator

function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

function displayRandomNumber() {
  const numberElement = document.getElementById('numberDisplay');
  const randomNumber = generateRandomNumber();
  numberElement.innerHTML = randomNumber;
}

displayRandomNumber();
