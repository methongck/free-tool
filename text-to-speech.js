document.addEventListener('DOMContentLoaded', () => {
    const speakBtn = document.getElementById('speakBtn');
    const ttsInput = document.getElementById('ttsInput');
    const resultBox = document.getElementById('resultBox');

    if ('speechSynthesis' in window) {
        speakBtn.addEventListener('click', () => {
            const text = ttsInput.value.trim();
            if (text) {
                const utterance = new SpeechSynthesisUtterance(text);
                speechSynthesis.speak(utterance);
                resultBox.innerHTML = '<p>Speaking...</p>';
                resultBox.style.display = 'block';
            } else {
                resultBox.innerHTML = '<p>Please enter text to speak.</p>';
                resultBox.style.display = 'block';
            }
        });
    } else {
        speakBtn.disabled = true;
        resultBox.innerHTML = '<p>Your browser does not support Text-to-Speech.</p>';
        resultBox.style.display = 'block';
    }
});