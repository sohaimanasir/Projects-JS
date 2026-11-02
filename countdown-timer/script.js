// countdown

const submitBtn = document.getElementById("submitBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");
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

// update a number and flip it only when it changes
function setValue(el, value) {
    value = String(value);
    if (el.textContent === value) return;
    el.textContent = value;
    el.classList.remove("flip");
    void el.offsetWidth; // restarts the animation
    el.classList.add("flip");
}

function resetDisplay() {
    setValue(days, 0);
    setValue(hours, "00");
    setValue(minutes, "00");
    setValue(seconds, "00");
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

    setValue(days, Math.floor(diff / oneDay));
    setValue(hours, pad(Math.floor((diff % oneDay) / oneHour)));
    setValue(minutes, pad(Math.floor((diff % oneHour) / oneMin)));
    setValue(seconds, pad(Math.floor((diff % oneMin) / oneSec)));
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
resetBtn.addEventListener("click", resetCountdown);