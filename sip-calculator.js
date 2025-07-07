document.addEventListener('DOMContentLoaded', () => {
    const sipForm = document.getElementById('sipForm');
    const monthlyInput = document.getElementById('monthly');
    const rateInput = document.getElementById('rate');
    const yearsInput = document.getElementById('years');
    const sipResult = document.getElementById('sipResult');

    sipForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const monthly = parseFloat(monthlyInput.value);
        const annualRate = parseFloat(rateInput.value) / 100;
        const years = parseFloat(yearsInput.value);

        if (!isNaN(monthly) && !isNaN(annualRate) && !isNaN(years) && monthly > 0 && annualRate > 0 && years > 0) {
            const monthlyRate = annualRate / 12;
            const months = years * 12;
            const futureValue = monthly * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);
            const totalInvestment = monthly * months;
            const wealthGained = futureValue - totalInvestment;

            sipResult.innerHTML = `<h2>Total Investment: ₹${totalInvestment.toFixed(2)}</h2><h2>Wealth Gained: ₹${wealthGained.toFixed(2)}</h2><h2>Maturity Value: ₹${futureValue.toFixed(2)}</h2>`;
            sipResult.style.display = 'block';
        } else {
            sipResult.innerHTML = `<p>Please enter valid numbers for all fields.</p>`;
            sipResult.style.display = 'block';
        }
    });
});