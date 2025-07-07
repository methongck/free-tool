document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculateBtn');
    const date1Input = document.getElementById('date1Input');
    const date2Input = document.getElementById('date2Input');
    const resultsDiv = document.getElementById('results');

    calculateBtn.addEventListener('click', () => {
        const date1 = date1Input.value;
        const date2 = date2Input.value;

        if (date1 && date2) {
            const d1 = new Date(date1);
            const d2 = new Date(date2);
            const diff = Math.abs(d1 - d2);
            const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
            resultsDiv.innerHTML = `<p>Difference: ${days} days</p>`;
        }
    });
});