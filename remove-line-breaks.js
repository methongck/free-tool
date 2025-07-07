document.addEventListener('DOMContentLoaded', () => {
    const rlbInput = document.getElementById('rlbInput');
    const rlbBtn = document.getElementById('rlbBtn');
    const copyBtn = document.getElementById('copyBtn');
    const resultBox = document.getElementById('resultBox');

    rlbBtn.addEventListener('click', () => {
        const text = rlbInput.value;
        if (text) {
            const processedText = text.replace(/(\r\n|\n|\r)/gm, " ").replace(/\s+/g, " ").trim();
            resultBox.innerHTML = `<textarea rows="7" readonly>${processedText}</textarea>`;
            resultBox.style.display = 'block';
        } else {
            resultBox.innerHTML = '<p>Please enter text to remove line breaks.</p>';
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
            alert('No text to copy.');
        }
    });
});