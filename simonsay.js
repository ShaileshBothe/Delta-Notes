let gameSeq=[];
let userSeq=[];

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function() {
    if (started == false) {
        console.log("Game Starde");
        started = true;

        levelUp();
    }
});

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function levelUp() {
    level++;
    h2.innerText = `level - ${level}`;

    let ranIdx = Math.floor(Math.random() * 3);
    let randColor = btns[ranIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    console.log(ranIdx);
    console.log(randColor);
    console.log(randbtn);

    gameSeq.push(randColor);
    gameFlash(randbtn);
}

function checkAns(idx) {
    // console.log("current level : ",level);

    if (userSeq[idx] == gameSeq[idx]) {
       if (userSeq.length == gameSeq.length) {
           setTimeout(levelUp,1000);
       }
    } else {
        h2.innerText = `Game Over ! your Score was <b>${level} </b> Press any key to start`;
        document.querySelector("body").style.color = "red";
        setTimeout(function () {
            document.querySelector("body").style.color = "red";
        },150);
        reSet();
    }
}

function btnPress() {
    console.log(this);
    let btn = this;
    userFlash(btn); 

    userColor = btn.getAttribute("id");
    console.log(userColor);
    checkAns(userSeq-1);
}

let allBtns = document.querySelector(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function reSet() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}