// countdown

const submitBtn = document.getElementById("submitBtn");
const stopBtn = document.getElementById("stopBtn");
const reseBtn = document.getElementById("resetBtn");
const countdown = document.getElementById("countdown");
const error = document.getElementById("error");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const pad = (n) => String(n).padStart(2, "0");

// earliest selectable date = tomorrow (local time)
function tomorrowStr() {
    const d = new Date();
    d.setDate(d.getDate() + 1);
    return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}
countdown.min = tomorrowStr();

function resetDisplay() {
    days.textContent = 0;
    hours.textContent = "00";
    minutes.textContent = "00";
    seconds.textContent = "00";
}

function updateCountdown() {
    const timer = new Date(countdown.value + "T00:00:00");
    const diff = timer.getTime() - Date.now();

    if (diff <= 0) {
        resetDisplay();
        stopCountdown();
        return;
    }

    const oneSec = 1000;
    const oneMin = oneSec * 60;
    const oneHour = oneMin * 60;
    const oneDay = oneHour * 24;

    days.textContent = Math.floor(diff / oneDay);
    hours.textContent = pad(Math.floor((diff % oneDay) / oneHour));
    minutes.textContent = pad(Math.floor((diff % oneHour) / oneMin));
    seconds.textContent = pad(Math.floor((diff % oneMin) / oneSec));
}

let countdownInterval;

function stopCountdown() {
    clearInterval(countdownInterval);
    stopBtn.disabled = true;
    submitBtn.disabled = false;
}

function resetCountdown() {
    stopCountdown();
    countdown.value = "";
    error.textContent = "";
    resetDisplay();
}

submitBtn.addEventListener("click", () => {
    error.textContent = "";

    if (!countdown.value) {
        error.textContent = "Pick a date first.";
        return;
    }

    // string comparison works for YYYY-MM-DD
    if (countdown.value < tomorrowStr()) {
        error.textContent = "Date must be in the future.";
        resetDisplay();
        return;
    }

    clearInterval(countdownInterval);
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
    submitBtn.disabled = true;
    stopBtn.disabled = false;
});

stopBtn.addEventListener("click", stopCountdown);
reseBtn.addEventListener('click' , resetCountdown)