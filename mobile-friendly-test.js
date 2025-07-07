document.addEventListener('DOMContentLoaded', () => {
    const testBtn = document.getElementById('testBtn');
    const urlInput = document.getElementById('urlInput');
    const resultsDiv = document.getElementById('results');

    testBtn.addEventListener('click', () => {
        const url = urlInput.value.trim();
        if (url) {
            resultsDiv.innerHTML = `<p>Testing ${url} for mobile-friendliness...</p>`;
            // Placeholder for mobile-friendly test
            setTimeout(() => {
                resultsDiv.innerHTML = `<p>${url} is mobile-friendly (this is a placeholder).</p>`;
            }, 2000);
        }
    });
});