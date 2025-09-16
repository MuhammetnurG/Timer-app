let timerInterval;
let elapsedTime = 0;
let isRunning = false;

// Start or resume the timer
document.getElementById('start-btn').addEventListener('click', () => {
    if (!isRunning) {
        isRunning = true;
        timerInterval = setInterval(updateTimer, 1000);
    }
});

// Stop the timer
document.getElementById('stop-btn').addEventListener('click', () => {
    clearInterval(timerInterval);
    isRunning = false;
});

// Reset the timer
document.getElementById('reset-btn').addEventListener('click', () => {
    clearInterval(timerInterval);
    isRunning = false;
    elapsedTime = 0;
    updateDisplay(0);
});

// update the elapsed time and display
function updateTimer() {
    elapsedTime++;
    updateDisplay(elapsedTime);
}

// update the timer display in HH:MM:SS format
function updateDisplay(seconds) {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, '0');
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    const secs = String(seconds % 60).padStart(2, '0');
    document.getElementById('timer-display').textContent = `${hours}:${minutes}:${secs}`;
}
