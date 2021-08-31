const playForm = document.querySelector("#login-form2");
const generateInput = document.querySelector("#login-form1 input");
const userInput = document.querySelector("#login-form2 input");
const chose = document.querySelector("#chose");
const game = document.querySelector("#game");

function playGame(event) {
  event.preventDefault();
  let btn = Math.floor(Math.random()*generateInput.value);
  const userNumber = userInput.value;
 

  chose.innerText = `You chose: ${userNumber}, the machine chose : ${btn}`;

  if (parseInt(btn) > parseInt(userNumber)) {
    game.innerText = `You lose!`;
 
  }else if(parseInt(btn) < parseInt(userNumber)){
    game.innerText = `You win!`;
    
  }else {
    game.innerText = `ReStart!`;
    
  }
  
}
/*
function playBtn() {
  const userNumber = userInput.value;
  let btn = Math.floor(Math.random() * 100 + 1);
  chose.innerText = `You chose: ${userNumber} ,the machine chose: ${btn}`;

}
*/

const use = parseInt("computerNumber");
const com = parseInt("userNumber");

if (use > com) {
  playForm.addEventListener("submit", playGame);
  game.innerText = `You won!`;
} else if (use < com) {
  playForm.addEventListener("submit", playGame);
  game.innerText = `You lost!`;
} else {
  playForm.addEventListener("submit", playGame);
  game.innerText = `ReStart!`;
}


