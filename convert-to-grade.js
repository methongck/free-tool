document.addEventListener('DOMContentLoaded', () => {
    const convertBtn = document.getElementById('convertBtn');
    const percentageInput = document.getElementById('percentageInput');
    const resultsDiv = document.getElementById('results');

    convertBtn.addEventListener('click', () => {
        const percentage = parseFloat(percentageInput.value);

        if (!isNaN(percentage)) {
            let grade;
            if (percentage >= 90) {
                grade = 'A';
            } else if (percentage >= 80) {
                grade = 'B';
            } else if (percentage >= 70) {
                grade = 'C';
            } else if (percentage >= 60) {
                grade = 'D';
            } else {
                grade = 'F';
            }
            resultsDiv.innerHTML = `<p>Grade: ${grade}</p>`;
        }
    });
});