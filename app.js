
let level = 0;
let gamestrt = false;

let gameseq = [];
let userseq = [];

let maxscore = level;

let btns = ['yellow','green','blue','red'];
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(gamestrt==false){
        gamestrt = true;
        console.log("game started");
        levelup();
    }
});

function levelup(){
    userseq=[];
    level++;
   
    h2.innerText = `level ${level}`;

    let randidx = Math.floor(Math.random()*3);
    let randcolor = btns[randidx];
    gameseq.push(randcolor);
    console.log(gameseq);
    let randbtn = document.querySelector(`.${randcolor}`);
    gameflash(randbtn);
}

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove('flash');
    },250);
}
function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove('userflash');
    },250);
}


function btnpress(){
    let btn = this;
    userflash(btn);

    let usecolor = btn.getAttribute('id');
    userseq.push(usecolor);
    checkAns(userseq.length-1);
}

let allbtn = document.querySelectorAll('.btn');
for( btn of allbtn){
    btn.addEventListener("click",btnpress);
}

function checkAns(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        maxscore = Math.max(maxscore,level);
        h2.innerHTML =  `Gameover! <br>Score:<b>${level}</b></br>  highest Score: <b>${maxscore}</b> <br>Please Enter any key to continue</br>`;
        document.querySelector('body').style.backgroundColor = "red";

        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";

        },1000);
        reset();
    }
}

function reset(){
    gamestrt = false;
    gameseq=[];
    userseq=[];
    level = 0;
}