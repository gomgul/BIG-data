const title = document.querySelector("#clock");

function getClock(){
   const now = new Date();
   const christmas = new Date("2021-12-25T00:00:00+0900"); 
   const d__day = christmas.getTime() - now.getTime();
   
   const christmasYear = christmas.getFullYear();
   const christmasMonth = christmas.getMonth() + 1;
   const christmasDay = christmas.getDate();

   const day = Math.floor(d__day/(1000*60*60*24));
   const hours = Math.floor((d__day % (1000*60*60*24))/(1000*60*60));
   const minutes = Math.floor((d__day % (1000*60*60))/(1000*60));
   const seconds = Math.floor((d__day % (1000*60))/1000);
 


   title.innerText = 
    `${christmasYear}년 ${christmasMonth}월 ${christmasDay}일까지 
      ${day}d ${hours < 10 ? `0${hours}` : hours}h ${minutes < 10 ? `0${minutes}` : minutes}m  ${seconds < 10 ? `0${seconds}` : seconds}s`;
}

const init = () => {
    getClock();
    setInterval(getClock, 1000);
  }
  init();
  