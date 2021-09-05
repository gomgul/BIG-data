  const btn = document.querySelector(".btn");

  const colors = [
    "#ef5777",
    "#575fcf",
    "#4bcffa",
    "#34e7e4",
    "#0be881",
    "#f53b57",
    "#3c40c6",
    "#0fbcf9",
    "#00d8d6",
    "#05c46b",
    "#ffc048",
    "#ffdd59",
    "#ff5e57",
    "#d2dae2",
    "#485460",
    "#ffa801",
    "#ffd32a",
    "#ff3f34"
  ];
  
  function colorChange() {
  const num1 = colors[Math.floor(Math.random() * colors.length)];
  const num2 = colors[Math.floor(Math.random() * colors.length)];
  
  
  document.body.style.background =
  `linear-gradient(to right, ${num1}, ${num2})`;

}


  btn.addEventListener("click", colorChange);
 












  /*
  const chosenColor = colors[Math.floor(Math.random()*colors.length)];
  const btn = document.querySelector(".btn");

  function bgColor(){
    document.body.style.backgroundColor = `${chosenColor}`; 
   
  }

  btn.addEventListener("click", bgColor);
*/
/*
  const bgColor = document.createElement("button");
  
  bgColor.style.backgroundColor = `${chosenColor}`;
  
  
  document.body.appendChild(bgColor);
*/