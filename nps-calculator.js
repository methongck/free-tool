document.addEventListener('DOMContentLoaded', () => {
    const npsForm = document.getElementById('npsForm');
    const monthlyInput = document.getElementById('monthly');
    const rateInput = document.getElementById('rate');
    const yearsInput = document.getElementById('years');
    const npsResult = document.getElementById('npsResult');

    npsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const monthly = parseFloat(monthlyInput.value);
        const rate = parseFloat(rateInput.value) / 100;
        const years = parseFloat(yearsInput.value);

        if (!isNaN(monthly) && !isNaN(rate) && !isNaN(years) && monthly > 0 && rate > 0 && years > 0) {
            const totalInvestment = monthly * 12 * years;
            const futureValue = monthly * ((Math.pow(1 + rate / 12, years * 12) - 1) / (rate / 12)) * (1 + rate / 12);
            const wealthGained = futureValue - totalInvestment;

            npsResult.innerHTML = `<h2>Total Investment: ₹${totalInvestment.toFixed(2)}</h2><h2>Wealth Gained: ₹${wealthGained.toFixed(2)}</h2><h2>Maturity Value: ₹${futureValue.toFixed(2)}</h2>`;
            npsResult.style.display = 'block';
        } else {
            npsResult.innerHTML = `<p>Please enter valid numbers for all fields.</p>`;
            npsResult.style.display = 'block';
        }
    });
});