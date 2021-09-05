const gameform = document.querySelector("#game-form");
const setNum = document.querySelector("#setUpNumber");
const chNum = document.querySelector("#choNum");
const hidText = document.querySelector("#hiddenText");

let num1 = parseInt();
let num2 = parseInt();
let num3 = parseInt();
hidText.classList.add("hidden");

function setNumber(event) {
  event.preventDefault();
  num1 = setNum.value;
}

function choseNumber(event) {
  event.preventDefault();
  num2 = chNum.value;
}

function randomNumber(event) {
  event.preventDefault();
  num3 = Math.floor(Math.random() * num1);
  if (parseInt(num2) === parseInt(num3)) {
    hidText.classList.remove("hidden");
    hidText.innerText = `You chose: ${num2} , the machine chose:${num3}.\n You won!`;
  } else {
    hidText.classList.remove("hidden");
    hidText.innerText = `You chose: ${num2} , the machine chose:${num3}.\n You lost!`;
  }
}

gameform.addEventListener("submit", setNumber);
gameform.addEventListener("submit", choseNumber);
gameform.addEventListener("submit", randomNumber);
