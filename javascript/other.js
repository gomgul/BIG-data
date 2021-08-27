const colors = ["lightblue", "lightcoral", "lightgreen"];
const body = document.querySelector("body");


function validation (){
    if (body.classList.contains(colors[0])){
        body.classList.remove(colors[0]);
    }else if (body.classList.contains(colors[1])){
        body.classList.remove(colors[1]);
    }else if (body.classList.contains(colors[2])){
        body.classList.remove(colors[2]);
    }
}





function changeColors(){
    console.log(body.className);
    const size = window.innerWidth;
    if (size <= 460) {
        validation();
        body.classList.add(colors[0]);
        console.log(body.className);
       
    }else if (size > 460 && size < 920 ) {
    
        validation();
        body.classList.add(colors[1]);
        console.log(body.className);
    }else {
        validation();
        body.classList.add(colors[2]);
        console.log(body.className);
    }
}

window.addEventListener("resize", changeColors);