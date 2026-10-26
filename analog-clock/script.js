const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

function updateClock() {
    const d = new Date();
    const h = d.getHours() % 12;
    const m = d.getMinutes();
    const s = d.getSeconds();

    const hRotation = 30 * h + m / 2;
    const mRotation = 6 * m + s / 10;
    const sRotation = 6 * s;

    hour.style.transform = `rotate(${hRotation}deg)`;
    minute.style.transform = `rotate(${mRotation}deg)`;
    second.style.transform = `rotate(${sRotation}deg)`;
}

updateClock();                
setInterval(updateClock, 1000);