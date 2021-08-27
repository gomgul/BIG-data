const title = document.querySelector("body");
const colors = ["lightblue", "lightpurple","lightorange"];
const RESIZE_CLASS0= (title.style.backgroundColor = colors[0]);
const RESIZE_CLASS1= (title.style.backgroundColor = colors[1]);
const RESIZE_CLASS2= (title.style.backgroundColor = colors[2]);


function reSize (){

const helloClass =  window.innerWidth;

if  (helloClass < 300) {
     title.classList.add(RESIZE_CLASS0);
} else if (helloClass >= 300 && helloClass <700) {
     title.classList.remove(RESIZE_CLASS0);
     title.classList.add(RESIZE_CLASS1);
}  else {
     title.classList.remove(RESIZE_CLASS1);
     title.classList.add(RESIZE_CLASS2);
}


}


window.addEventListener("resize", reSize ) ;