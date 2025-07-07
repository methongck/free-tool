document.addEventListener('DOMContentLoaded', () => {
    const urlInput = document.getElementById('urlInput');
    const encodeBtn = document.getElementById('encodeBtn');
    const decodeBtn = document.getElementById('decodeBtn');
    const copyBtn = document.getElementById('copyBtn');
    const resultBox = document.getElementById('resultBox');

    encodeBtn.addEventListener('click', () => {
        const text = urlInput.value.trim();
        if (text) {
            resultBox.innerHTML = `<textarea rows="5" readonly>${encodeURIComponent(text)}</textarea>`;
            resultBox.style.display = 'block';
        } else {
            resultBox.innerHTML = '<p>Please enter text to encode.</p>';
            resultBox.style.display = 'block';
        }
    });

    decodeBtn.addEventListener('click', () => {
        const text = urlInput.value.trim();
        if (text) {
            try {
                resultBox.innerHTML = `<textarea rows="5" readonly>${decodeURIComponent(text)}</textarea>`;
                resultBox.style.display = 'block';
            } catch (e) {
                resultBox.innerHTML = '<p>Invalid URL encoded string.</p>';
                resultBox.style.display = 'block';
            }
        } else {
            resultBox.innerHTML = '<p>Please enter text to decode.</p>';
            resultBox.style.display = 'block';
        }
    });

    copyBtn.addEventListener('click', () => {
        const textarea = resultBox.querySelector('textarea');
        if (textarea) {
            textarea.select();
            document.execCommand('copy');
            alert('Text copied to clipboard!');
        } else {
            alert('No result to copy.');
        }
    });
});