const title = document.querySelector("body");



function reSize (){

const helloClass =  window.innerWidth;

if  (helloClass < 1000) {
     title.classList.add("lightblue");
} else if (helloClass >= 1000 && helloClass <1500) {
     title.classList.remove("lightblue");
     title.classList.add("lightcoral");
}  else {
     title.classList.remove("lightcoral");
     title.classList.add("lightgreen");
}


}


window.addEventListener("resize", reSize ) ;