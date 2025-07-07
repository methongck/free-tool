document.addEventListener('DOMContentLoaded', () => {
    const typingTextDiv = document.getElementById('typingText');
    const typingInput = document.getElementById('typingInput');
    const startTypingBtn = document.getElementById('startTyping');
    const resetTypingBtn = document.getElementById('resetTyping');
    const typingResultDiv = document.getElementById('typingResult');

    const sampleTexts = [
        "The quick brown fox jumps over the lazy dog.",
        "Never underestimate the power of a good book.",
        "Practice makes perfect, so keep typing.",
        "The early bird catches the worm, but the second mouse gets the cheese."
    ];

    let startTime;
    let timer;
    let currentText;

    const initializeTest = () => {
        typingInput.value = '';
        typingInput.disabled = true;
        startTypingBtn.disabled = false;
        resetTypingBtn.disabled = true;
        typingResultDiv.style.display = 'none';
        currentText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
        typingTextDiv.textContent = currentText;
    };

    startTypingBtn.addEventListener('click', () => {
        typingInput.disabled = false;
        typingInput.focus();
        startTime = new Date().getTime();
        startTypingBtn.disabled = true;
        resetTypingBtn.disabled = false;
    });

    typingInput.addEventListener('input', () => {
        const typedText = typingInput.value;
        if (typedText === currentText) {
            const endTime = new Date().getTime();
            const timeTaken = (endTime - startTime) / 1000; // in seconds
            const wordsTyped = currentText.split(' ').length;
            const wpm = (wordsTyped / timeTaken) * 60;

            typingResultDiv.innerHTML = `<h2>Your WPM: ${wpm.toFixed(2)}</h2>`;
            typingResultDiv.style.display = 'block';
            typingInput.disabled = true;
            resetTypingBtn.disabled = false;
        }
    });

    resetTypingBtn.addEventListener('click', initializeTest);

    initializeTest();
});