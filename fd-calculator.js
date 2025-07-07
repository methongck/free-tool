document.addEventListener('DOMContentLoaded', () => {
    const fdForm = document.getElementById('fdForm');
    const amountInput = document.getElementById('amount');
    const rateInput = document.getElementById('rate');
    const yearsInput = document.getElementById('years');
    const fdResult = document.getElementById('fdResult');

    fdForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const amount = parseFloat(amountInput.value);
        const rate = parseFloat(rateInput.value) / 100;
        const years = parseFloat(yearsInput.value);

        if (!isNaN(amount) && !isNaN(rate) && !isNaN(years) && amount > 0 && rate > 0 && years > 0) {
            const maturityAmount = amount * Math.pow((1 + rate), years);
            fdResult.innerHTML = `<h2>Maturity Amount: ₹${maturityAmount.toFixed(2)}</h2>`;
            fdResult.style.display = 'block';
        } else {
            fdResult.innerHTML = `<p>Please enter valid numbers for all fields.</p>`;
            fdResult.style.display = 'block';
        }
    });
});