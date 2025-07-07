document.addEventListener('DOMContentLoaded', () => {
    const loanForm = document.getElementById('loanForm');
    const amountInput = document.getElementById('amount');
    const rateInput = document.getElementById('rate');
    const yearsInput = document.getElementById('years');
    const loanResult = document.getElementById('loanResult');

    loanForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const amount = parseFloat(amountInput.value);
        const rate = parseFloat(rateInput.value) / 100 / 12;
        const years = parseFloat(yearsInput.value);
        const months = years * 12;

        if (!isNaN(amount) && !isNaN(rate) && !isNaN(years) && amount > 0 && rate > 0 && years > 0) {
            const emi = (amount * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
            const totalPayable = emi * months;
            const totalInterest = totalPayable - amount;

            loanResult.innerHTML = `<h2>Monthly EMI: ₹${emi.toFixed(2)}</h2><p>Total Payable: ₹${totalPayable.toFixed(2)}</p><p>Total Interest: ₹${totalInterest.toFixed(2)}</p>`;
            loanResult.style.display = 'block';
        } else {
            loanResult.innerHTML = `<p>Please enter valid numbers for all fields.</p>`;
            loanResult.style.display = 'block';
        }
    });
});