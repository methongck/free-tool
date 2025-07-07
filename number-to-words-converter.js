document.addEventListener('DOMContentLoaded', () => {
    const numWordsForm = document.getElementById('numWordsForm');
    const numInput = document.getElementById('numInput');
    const numWordsResult = document.getElementById('numWordsResult');

    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const scales = ['', 'thousand', 'million', 'billion', 'trillion'];

    function convertLessThanOneThousand(num) {
        let result = '';
        if (num % 100 < 20) {
            result = teens[num % 10] || ones[num % 10];
            num = Math.floor(num / 100);
        } else {
            result = ones[num % 10];
            num = Math.floor(num / 10);
            result = tens[num % 10] + (result ? '-' + result : '');
            num = Math.floor(num / 10);
        }
        if (num > 0) {
            result = ones[num] + ' hundred' + (result ? ' ' + result : '');
        }
        return result;
    }

    function convert(num) {
        if (num === 0) return 'zero';
        if (num < 0) return 'minus ' + convert(Math.abs(num));

        let word = '';
        let scaleIndex = 0;

        do {
            const chunk = num % 1000;
            if (chunk !== 0) {
                const chunkWord = convertLessThanOneThousand(chunk);
                word = chunkWord + ' ' + scales[scaleIndex] + ' ' + word;
            }
            num = Math.floor(num / 1000);
            scaleIndex++;
        } while (num > 0);

        return word.trim();
    }

    numWordsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const number = parseInt(numInput.value);

        if (!isNaN(number)) {
            const words = convert(number);
            numWordsResult.innerHTML = `<h2>${words.charAt(0).toUpperCase() + words.slice(1)}</h2>`;
            numWordsResult.style.display = 'block';
        } else {
            numWordsResult.innerHTML = '<p>Please enter a valid number.</p>';
            numWordsResult.style.display = 'block';
        }
    });
});