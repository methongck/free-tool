document.addEventListener('DOMContentLoaded', () => {
    const ppfForm = document.getElementById('ppfForm');
    const amountInput = document.getElementById('amount');
    const rateInput = document.getElementById('rate');
    const yearsInput = document.getElementById('years');
    const ppfResult = document.getElementById('ppfResult');

    ppfForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const amount = parseFloat(amountInput.value);
        const rate = parseFloat(rateInput.value) / 100;
        const years = parseFloat(yearsInput.value);

        if (!isNaN(amount) && !isNaN(rate) && !isNaN(years) && amount > 0 && rate > 0 && years > 0) {
            let futureValue = 0;
            for (let i = 0; i < years; i++) {
                futureValue = (futureValue + amount) * (1 + rate);
            }

            ppfResult.innerHTML = `<h2>Maturity Value: ₹${futureValue.toFixed(2)}</h2>`;
            ppfResult.style.display = 'block';
        } else {
            ppfResult.innerHTML = `<p>Please enter valid numbers for all fields.</p>`;
            ppfResult.style.display = 'block';
        }
    });
});