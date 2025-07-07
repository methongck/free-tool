document.addEventListener('DOMContentLoaded', () => {
    const checkBtn = document.getElementById('checkBtn');
    const textInput = document.getElementById('textInput');
    const keywordInput = document.getElementById('keywordInput');
    const resultsDiv = document.getElementById('results');

    checkBtn.addEventListener('click', () => {
        const text = textInput.value.trim();
        const keyword = keywordInput.value.trim();

        if (text && keyword) {
            const words = text.split(/\s+/);
            const keywordCount = words.filter(word => word.toLowerCase().includes(keyword.toLowerCase())).length;
            const density = (keywordCount / words.length) * 100;
            resultsDiv.innerHTML = `<p>Keyword Density: ${density.toFixed(2)}%</p>`;
        }
    });
});