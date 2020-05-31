const plus=document.getElementById('plus');
const minus=document.getElementById('minus');
const heart=document.getElementById('heart');
const pause=document.getElementById('pause');
const submit=document.getElementById('submit');
const counter= document.getElementById('counter');
intCounter=parseInt(counter.innerText);
let paused=false;
function timerStart(){
  intCounter++;
  counter.innerText=intCounter;
}
function increment(){
 
    intCounter++;
    counter.innerText=intCounter;
  
}
function decrement(){
  if(intCounter>0 ){
    intCounter--;
    counter.innerText=intCounter 
  }
}

function disableBtns(bool){
  heart.disabled=bool;
  plus.disabled=bool;
  minus.disabled=bool;
  submit.disabled=bool;
}
function stop(){
  if(paused===false){
      clearInterval(timer);
      pause.innerText='resume';
      paused=true;
      disableBtns(true);
      
      
  }
  else{
    timer=setInterval(timerStart,1000);
    paused=false;
    pause.innerText='pause';
    disableBtns(false);
  }
}

plus.addEventListener('click',increment);
minus.addEventListener('click',decrement);
pause.addEventListener('click',stop)
let timer=setInterval(timerStart,1000);

