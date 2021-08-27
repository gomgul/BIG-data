const title = document.querySelector("body");
const colors = ["lightblue","lightcoral","lightgreen", "lime"];
const RESIZE = title.style.backgroundColor = colors [0];


function reSize (){

  const helloClass =  window.innerWidth;

if  (helloClass < 1000) {
     title.style.backgroundColor = colors [1];
} else if (helloClass >= 1000 && helloClass <1200) {
     title.style.backgroundColor = colors [2];
}  else {
     title.style.backgroundColor = colors [3];
}


}


window.addEventListener("resize", reSize ) ;