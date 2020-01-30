
/*
//RANDOM NUMBER 
document.getElementById("btn").onclick = function () {

    let x = document.getElementById("box").value;
    let guess = Math.random();
    guess = guess * 3
    guess = Math.floor(guess);

    let display = document.getElementById("p1");

    if (x == guess) {
        display.innerHTML = "You got it!!!";
        display.style.color = "green";
        display.style.fontSize = "25px";
    } else {
        display.innerHTML = "SORRY!!! Guess is "+ guess + " Better Luck Next Time.";
        display.style.color = "red";
        display.style.fontSize = "20px";

    } 
}

// Reaction tester
let shape = document.getElementById("shape");
let timeCount =  document.getElementById("time");
let audio = new Audio('sound.mp3');

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  

let start = new Date().getTime();

function appear() {
    let top = Math.random()*500;
    let left = Math.random()*500;
    let width = (Math.random()*200)+100;
    if(Math.random()> 0.5) {
        shape.style.borderRadius = "50%";
    } else {
        shape.style.borderRadius = "0";
    }
    shape.style.backgroundColor = getRandomColor();
    shape.style.top = top + "px";
    shape.style.left = left + "px";
    shape.style.width = width + "px";
    shape.style.height = width + "px";

    shape.style.display = "block";
    start = new Date().getTime();
}
function runTime () {
    setTimeout(appear, Math.random()*2000);
    
}
runTime ();
let clicks = 0;
shape.onclick = function () {
    audio.play();
    shape.style.display = "none";
    let end = new Date().getTime();
    let time = (end - start)/1000;
    timeCount.innerHTML = time;    
    clicks++;
    document.getElementById("click").innerHTML = clicks;  
    runTime ();
}

function startTimer(duration, display) {
    let totalTime = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(totalTime / 60, 10);
        seconds = parseInt(totalTime % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--totalTime < 0) {
            totalTime = duration;
            clicks = 0;
            alert("Time Over!! You hit Total " + clicks + " Clicks")
        }
    }, 1000);
}

window.onload = function () {
    let fiveMinutes = 60 * 2,
        display = document.querySelector('#totalTime');
    startTimer(fiveMinutes, display);
};

  //document.getElementById("totalTime").innerHTML = totalTime;

  */