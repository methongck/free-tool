document.addEventListener('DOMContentLoaded', () => {
    const gstForm = document.getElementById('gstForm');
    const amountInput = document.getElementById('amount');
    const rateInput = document.getElementById('rate');
    const gstResult = document.getElementById('gstResult');

    gstForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const amount = parseFloat(amountInput.value);
        const rate = parseFloat(rateInput.value);

        if (!isNaN(amount) && !isNaN(rate) && amount > 0 && rate > 0) {
            const gstAmount = (amount * rate) / 100;
            const totalAmount = amount + gstAmount;
            gstResult.innerHTML = `<h2>GST Amount: ₹${gstAmount.toFixed(2)}</h2><p>Total Amount: ₹${totalAmount.toFixed(2)}</p>`;
            gstResult.style.display = 'block';
        } else {
            gstResult.innerHTML = `<p>Please enter valid numbers for all fields.</p>`;
            gstResult.style.display = 'block';
        }
    });
});