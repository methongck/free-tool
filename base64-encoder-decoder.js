document.addEventListener('DOMContentLoaded', () => {
    const encodeBtn = document.getElementById('encodeBtn');
    const decodeBtn = document.getElementById('decodeBtn');
    const textInput = document.getElementById('textInput');
    const resultsDiv = document.getElementById('results');

    encodeBtn.addEventListener('click', () => {
        const text = textInput.value.trim();
        if (text) {
            resultsDiv.textContent = btoa(text);
        }
    });

    decodeBtn.addEventListener('click', () => {
        const text = textInput.value.trim();
        if (text) {
            try {
                resultsDiv.textContent = atob(text);
            } catch (e) {
                resultsDiv.textContent = 'Invalid Base64';
            }
        }
    });
});