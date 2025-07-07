document.addEventListener('DOMContentLoaded', () => {
    const calculateBtn = document.getElementById('calculateBtn');
    const num1Input = document.getElementById('num1');
    const num2Input = document.getElementById('num2');
    const resultsDiv = document.getElementById('results');

    calculateBtn.addEventListener('click', () => {
        const num1 = parseFloat(num1Input.value);
        const num2 = parseFloat(num2Input.value);

        if (!isNaN(num1) && !isNaN(num2)) {
            const result = (num1 / 100) * num2;
            resultsDiv.innerHTML = `<p>Result: ${result}</p>`;
        }
    });
});