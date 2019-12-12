let paused = false;
let running = false;
let canBreak = true;

let initialSeconds = 60 * 25;
const display = document.querySelector('#timer');

const stop = document.querySelector("#stop");
stop.addEventListener("click", function() {
    paused = true;
    running = false;
    clearInterval(ourInterval);
    arr = display.innerHTML.split(":");
    initialSeconds = parseInt(arr[0], 10) * 60 + parseInt(arr[1], 10);
});

const start = document.querySelector("#start");
start.addEventListener("click", function() {
    paused = false;
    if (running === false) {
        startCountdown();
    }
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", function() {
    running = false;
    clearInterval(ourInterval);
    display.innerHTML = (stime.innerHTML + ":00").padStart(5, '0');
    initialSeconds = parseInt(stime.innerHTML, 10)*60;
});

let ourInterval;

function startTimer(initialSeconds, display) {
    running = true;

    ourInterval = setInterval(function () {
        minutes = parseInt(initialSeconds / 60, 10);
        seconds = parseInt(initialSeconds % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;

        if (paused === false) {
            if (--initialSeconds < 0) {
                clearInterval(ourInterval);
                audio.play();
                running = false;
                if (canBreak === true) {
                    initialSeconds = parseInt(btime.innerHTML, 10)*60;
                    startTimer(initialSeconds, display);
                    canBreak = false;
                } else {
                    display.innerHTML = (stime.innerHTML + ":00").padStart(5, '0');
                    canBreak = true;
                }
            }
        }
    }, 1000);
};

let startCountdown = function () {
    clearInterval(ourInterval);
    startTimer(initialSeconds, display);
};

const stime = document.querySelector('#stime');

const sarrup = document.querySelector('#sarrup');
sarrup.addEventListener("click", function() {
    initialSeconds = parseInt(stime.innerHTML, 10)*60 + 60;
    stime.textContent = initialSeconds / 60;
    if(running === false && paused === false) { 
        display.innerHTML = (initialSeconds / 60 + ":00").padStart(5,'0');
    };
});

const sarrdo = document.querySelector('#sarrdo');
sarrdo.addEventListener("click", function() {
    if(parseInt(stime.innerHTML, 10) >= 2 ) {
        initialSeconds = parseInt(stime.innerHTML, 10)*60 - 60;
        stime.textContent = initialSeconds / 60;
        if(running === false && paused === false) { 
                display.innerHTML = (initialSeconds / 60 + ":00").padStart(5, '0');
        };
    };
});

const btime = document.querySelector('#btime');

const barrup = document.querySelector('#barrup');
barrup.addEventListener("click", function () {
    btime.innerHTML = parseInt(btime.innerHTML, 10) + 1;
});

const barrdo = document.querySelector('#barrdo');
barrdo. addEventListener("click", function() {
    if(btime.innerHTML !== "1") {
        btime.innerHTML = parseInt(btime.innerHTML, 10) - 1;
    }
});

const audio = new Audio('analog-watch-alarm_daniel-simion.mp3');