document.addEventListener('DOMContentLoaded', () => {
    const taxForm = document.getElementById('taxForm');
    const incomeInput = document.getElementById('income');
    const deductionInput = document.getElementById('deduction');
    const taxResult = document.getElementById('taxResult');

    taxForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const income = parseFloat(incomeInput.value);
        const deduction = parseFloat(deductionInput.value);

        if (!isNaN(income) && !isNaN(deduction) && income >= 0 && deduction >= 0) {
            const taxableIncome = income - deduction;
            let tax = 0;

            if (taxableIncome > 1000000) {
                tax = (taxableIncome - 1000000) * 0.30 + 112500;
            } else if (taxableIncome > 500000) {
                tax = (taxableIncome - 500000) * 0.20 + 12500;
            } else if (taxableIncome > 250000) {
                tax = (taxableIncome - 250000) * 0.05;
            }

            taxResult.innerHTML = `<h2>Taxable Income: ₹${taxableIncome.toFixed(2)}</h2><h2>Income Tax: ₹${tax.toFixed(2)}</h2>`;
            taxResult.style.display = 'block';
        } else {
            taxResult.innerHTML = `<p>Please enter valid numbers for income and deductions.</p>`;
            taxResult.style.display = 'block';
        }
    });
});