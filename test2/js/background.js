const images = ["5e5f5fc996246.jpg ", "다운로드.jpg","재개봉-6.jpg"];

const chosenImage = images[Math.floor(Math.random()*images.length)];



const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;


document.body.appendChild(bgImage);










