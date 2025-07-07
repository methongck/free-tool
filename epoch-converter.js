document.addEventListener('DOMContentLoaded', () => {
    const toHumanBtn = document.getElementById('toHumanBtn');
    const toEpochBtn = document.getElementById('toEpochBtn');
    const epochInput = document.getElementById('epochInput');
    const datetimeInput = document.getElementById('datetimeInput');
    const resultsDiv = document.getElementById('results');

    toHumanBtn.addEventListener('click', () => {
        const epoch = epochInput.value.trim();
        if (epoch) {
            const date = new Date(epoch * 1000);
            resultsDiv.textContent = date.toUTCString();
        }
    });

    toEpochBtn.addEventListener('click', () => {
        const datetime = datetimeInput.value;
        if (datetime) {
            const date = new Date(datetime);
            resultsDiv.textContent = Math.floor(date.getTime() / 1000);
        }
    });
});