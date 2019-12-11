/*
let minutes = 25;
let seconds = 00;
let currentTime = minutes.toFixed(2).toString + ":" + seconds.toFixed(2).toString;

document.querySelector('#timer').innerHTML = currentTime; 

function countdown() {
    let timer = minutes*60+seconds
    let start = Date.now();
    while (timer > 0) {
        if (start - Date.now() <= -1000000) {
            start = Date.now();
            console.log(timer)
            timer--;
        }
    }
}

*/

let paused = false;
let running = false;
let reset2 = false;

const stop = document.querySelector("#stop");
stop.addEventListener("click", function() {
    paused = true;
});

const start = document.querySelector("#start");
start.addEventListener("click", function() {
    paused = false;
    reset2 = false;
    if (running === false) {
        startCountdown();
    }
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", function() {
    reset2 = true;
    running = false;
})

function startTimer(duration, display) {
    running = true;
    var timer = duration, minutes, seconds;
    let ourInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (reset2 === true) {
            clearInterval(ourInterval);
            document.querySelector('#timer').innerHTML = "25:00"
        }
        if (paused === false) {
           if (--timer < 0) {
                timer = duration;
                running = false;
            }
        }
    }, 1000);
}

let startCountdown = function () {
    var initialMinutes = 60 * 25,
        display = document.querySelector('#timer');
    startTimer(initialMinutes, display);
};