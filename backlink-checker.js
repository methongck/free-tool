document.addEventListener('DOMContentLoaded', () => {
    const checkBtn = document.getElementById('checkBtn');
    const urlInput = document.getElementById('urlInput');
    const resultsDiv = document.getElementById('results');

    checkBtn.addEventListener('click', () => {
        const url = urlInput.value.trim();
        if (url) {
            resultsDiv.innerHTML = `<p>Checking backlinks for ${url}...</p>`;
            // Placeholder for backlink check
            setTimeout(() => {
                resultsDiv.innerHTML = `<p>Found 10 backlinks for ${url} (this is a placeholder).</p>`;
            }, 2000);
        }
    });
});