let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;

document.addEventListener("keypress",function(){
    if(started == false){
        console.log("game is started");
        started=true;
    }
    levelUp();
});

let h2 = document.querySelector("h2");

let btns = ["red","green","blue","yellow"];;

function levelUp() {
    level++;
    userSeq=[];
    h2.innerText = `level ${level}`;

    let randIdx = Math.floor(Math.random()*4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    
    gameSeq.push(randColor);
    
    gameFlash(randBtn);


}

function gameFlash(btn){
    btn.classList.add("game-flash");
    setTimeout(()=>{
        btn.classList.remove("game-flash");
    },250)
    
}

function userFlash(btn){
    btn.classList.add("user-flash");
    setTimeout(()=>{
        btn.classList.remove("user-flash");
    },250)
    
}


function checkAns(idx){
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp,1000);
        }
    }else{
    h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key to get started.`;
    document.querySelector("body").style.backgroundColor="red",
    setTimeout(()=>{
        document.querySelector("body").style.backgroundColor="white"
    },1000);
    
let score = document.querySelector("#score");
let maxScore = 0;
if(level>=maxScore){
    score.innerHTML = `Highest Score ${level}`;
}
     reset();
    }


}
function btnPress(){
   btn = this;
   userFlash(btn);

   userColor = btn.getAttribute("id");
   userSeq.push(userColor);

   checkAns(userSeq.length-1);


}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}


function reset(){
    level=0;
    gameSeq = [];
    userSeq = [];
    started = false;
    

}