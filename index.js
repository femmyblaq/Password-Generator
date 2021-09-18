// tageting each Element
const resultEl = document.getElementById("result");
const lenghtEl = document.getElementById("lenght");
const uppercaseEl = document.getElementById("uppercase");
const lowercaseEl = document.getElementById("lowercase");
const symbolEl = document.getElementById("symbol");
const numberEl = document.getElementById("number");
const generateEl = document.getElementById("generate");
const clipboardEl = document.getElementById("clipboard");

const randomFunc = {
  lower: getRandowLower,
  upper: getRandomUpper,
  symbol: getRandomSymbols,
  number: getRandomNumber,
};

//configuring the generate button
generateEl.addEventListener("click", () => {
  const lenght = +lenghtEl.value;
  const hasUpper = uppercaseEl.checked;
  const hasNumber = numberEl.checked;
  const hasLowercase = lowercaseEl.checked;
  const hasSymbol = symbolEl.checked;
  resultEl.innerText = generatePassword(
    lenght,
    hasUpper,
    hasNumber,
    hasLowercase,
    hasSymbol
  );
});

function generatePassword(symbol, upper, number, lowercase, lenght) {
  //init password var
  //filter out unchecked types
  //loop over length call generator function for each type

  let generatePassword = "";

  const typesCount = lowercase + upper + number + symbol;
  console.log("typeCount ", typesCount);
}

// generating random lowercase letter
function getRandowLower() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

// generate random upper
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

console.log(getRandomUpper());

// generate random upper
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbols() {
  const symbol = "!@#$%^&*()_+";
  return symbol[Math.floor(Math.random() * symbol.length)];
}
