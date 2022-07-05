console.log("Welcome to js")
let computerguess;
let userguess = [];
let usernumberupdate = document.getElementById('textoutput');
let numberupdate = document.getElementById("inputbox");
let audio = new Audio("ting.mp3");

const init = () => {
    computerguess = Math.floor(Math.random() * 100);
    // console.log(computerguess);
    document.getElementById('newgamebutton').style.display = "none";
    document.getElementById('gamearea').style.display = "none";

};
const startgame = () => {
    document.getElementById('welcomescreen').style.display = "none";
    document.getElementById('gamearea').style.display = "block";
}
//start new game
const startnewgame=()=>{
    document.getElementById('newgamebutton').style.display = "block";
    usernumberupdate.setAttribute("disabled", true);

}
// page relode
const newgamebegin =()=>{
    audio.play();
    window.location.reload();
}

//  main logic of our guess
const compareguess = () => {
    audio.play();
    const usernumber = Number(document.getElementById("inputbox").value);
    userguess = [...userguess, usernumber];
    document.getElementById("guesses").innerHTML = userguess;
    //  check the value low or high
    if (userguess.length < mxguess) {
        if (usernumber > computerguess) {
            usernumberupdate.innerHTML = "Your guess is High 😲";
            numberupdate.value = "";
        } else if (usernumber < computerguess) {
            usernumberupdate.innerHTML = "Your guess is Low 😔";
            numberupdate.value = "";
        } else {
            usernumberupdate.innerHTML = "It's correct 😀";
            numberupdate.value = "";
            startnewgame();
        }
    }else{
        if (usernumber > computerguess) {
            usernumberupdate.innerHTML = `You loose!! correct number was ${computerguess}`;
            numberupdate.value = "";
            startnewgame();
        }
        else if (usernumber < computerguess) {
            usernumberupdate.innerHTML = `You loose!! correct number was ${computerguess}`;
            numberupdate.value = "";
            startnewgame();
        }
        else {
            usernumberupdate.innerHTML = "It's correct 😀";
            numberupdate.value = "";
            startnewgame();
        }
    }

    document.getElementById('attempts').innerHTML = userguess.length;
};

const easymode = () => {
    audio.play();
    mxguess = 10;
    startgame();
};
const hardmode = () => {
    audio.play();
    mxguess = 5;
    startgame();
};