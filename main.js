
let paused = false;
let running = false;
let reset2 = false;
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
    reset2 = false;
    if (running === false) {
        startCountdown();
    }
});

const reset = document.querySelector("#reset");
reset.addEventListener("click", function() {
    reset2 = true;
    running = false;
    display.innerHTML = stime.innerHTML + ":00";
    initialSeconds = parseInt(stime.innerHTML, 10)*60;
});

let ourInterval;

function startTimer(duration, display) {
    running = true;
    var timer = duration, minutes, seconds;
    ourInterval = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;
        if (reset2 === true) {
            clearInterval(ourInterval);
            display.innerHTML = initialSeconds / 60 + ":00";
        }
        if (paused === false) {
           if (--timer < 0) {
                running = false;
                if (canBreak === true) {
                    timer = parseInt(btime.innerHTML, 10)*60;
                    canBreak = false;
                } else {
                    display.innerHTML = stime.innerHTML + ":00";
                }
            }
        }
    }, 1000);
};


let startCountdown = function () {
    startTimer(initialSeconds, display);
};

const stime = document.querySelector('#stime');

const sarrup = document.querySelector('#sarrup');
sarrup.addEventListener("click", function() {
    initialSeconds = parseInt(stime.innerHTML, 10)*60 + 60;
    stime.textContent = initialSeconds / 60;
    if(running === false) { display.innerHTML = initialSeconds / 60 + ":00" };
});

const sarrdo = document.querySelector('#sarrdo');
sarrdo.addEventListener("click", function() {
    initialSeconds = parseInt(stime.innerHTML, 10)*60 - 60;
    stime.textContent = initialSeconds / 60;
    if(running === false) { display.innerHTML = initialSeconds / 60 + ":00" };
});

const btime = document.querySelector('#btime');

const barrup = document.querySelector('#barrup');
barrup.addEventListener("click", function () {
    btime.innerHTML = parseInt(btime.innerHTML, 10) + 1;
});

const barrdo = document.querySelector('#barrdo');
barrdo. addEventListener("click", function() {
    btime.innerHTML = parseInt(btime.innerHTML, 10) - 1;
});