document.addEventListener('DOMContentLoaded', () => {
    const testBtn = document.getElementById('testBtn');
    const urlInput = document.getElementById('urlInput');
    const resultsDiv = document.getElementById('results');

    testBtn.addEventListener('click', () => {
        const url = urlInput.value.trim();
        if (url) {
            resultsDiv.innerHTML = `<p>Testing speed for ${url}...</p>`;
            // Placeholder for speed test
            setTimeout(() => {
                resultsDiv.innerHTML = `<p>Load time for ${url}: 1.2s (this is a placeholder).</p>`;
            }, 2000);
        }
    });
});