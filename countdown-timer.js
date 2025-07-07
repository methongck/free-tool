document.addEventListener('DOMContentLoaded', () => {
    const timerForm = document.getElementById('timerForm');
    const minutesInput = document.getElementById('minutesInput');
    const secondsInput = document.getElementById('secondsInput');
    const timerResult = document.getElementById('timerResult');
    let countdownInterval;

    timerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        clearInterval(countdownInterval); // Clear any existing interval

        let minutes = parseInt(minutesInput.value);
        let seconds = parseInt(secondsInput.value);

        if (isNaN(minutes) || isNaN(seconds) || minutes < 0 || seconds < 0 || seconds >= 60) {
            timerResult.innerHTML = '<p>Please enter valid minutes and seconds.</p>';
            timerResult.style.display = 'block';
            return;
        }

        let totalSeconds = minutes * 60 + seconds;

        const updateTimer = () => {
            const displayMinutes = Math.floor(totalSeconds / 60);
            const displaySeconds = totalSeconds % 60;

            timerResult.innerHTML = `<p>${displayMinutes.toString().padStart(2, '0')}:${displaySeconds.toString().padStart(2, '0')}</p>`;
            timerResult.style.display = 'block';

            if (totalSeconds <= 0) {
                clearInterval(countdownInterval);
                timerResult.innerHTML = '<p>Time's up!</p>';
            }
            totalSeconds--;
        };

        updateTimer(); // Initial call to display immediately
        countdownInterval = setInterval(updateTimer, 1000);
    });
});