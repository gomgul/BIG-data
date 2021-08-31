const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

function onSubmit(event) {
event.preventDefault();
loginForm.classList.add("hidden");
const username = loginInput.value;
localStorage.setItem("username", username);
paintGreeting(username);
}

loginForm.addEventListener("submit", onSubmit);

function paintGreeting(username) {
greeting.innerText = `Hello ${username}`;
greeting.classList.remove("hidden");
}

const saveUsername = localStorage.getItem("username");

if (saveUsername === null) {
loginForm.classList.remove("hidden");
loginForm.addEventListener("submit", onSubmit);
} else {
paintGreeting(saveUsername);
}

const removeBtn = document.querySelector(".remove_storage");
/*h1 안에 remove_storage 클래스 생성 */

function removeStorage() {
localStorage.removeItem("username");
window.location.reload();
}

removeBtn.addEventListener("click", removeStorage);