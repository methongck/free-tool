document.addEventListener('DOMContentLoaded', () => {
    const emiForm = document.getElementById('emiForm');
    const loanInput = document.getElementById('loan');
    const rateInput = document.getElementById('rate');
    const yearsInput = document.getElementById('years');
    const emiResult = document.getElementById('emiResult');

    emiForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const loan = parseFloat(loanInput.value);
        const rate = parseFloat(rateInput.value) / 100 / 12;
        const years = parseFloat(yearsInput.value);
        const months = years * 12;

        if (!isNaN(loan) && !isNaN(rate) && !isNaN(years) && loan > 0 && rate > 0 && years > 0) {
            const emi = (loan * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
            emiResult.innerHTML = `<h2>Monthly EMI: ₹${emi.toFixed(2)}</h2>`;
            emiResult.style.display = 'block';
        } else {
            emiResult.innerHTML = `<p>Please enter valid numbers for all fields.</p>`;
            emiResult.style.display = 'block';
        }
    });
});