document.addEventListener('DOMContentLoaded', () => {
    const startBtn = document.getElementById('startBtn');
    const sttOutput = document.getElementById('sttOutput');
    const resultBox = document.getElementById('resultBox');

    if ('webkitSpeechRecognition' in window) {
        const recognition = new webkitSpeechRecognition();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = 'en-US';

        recognition.onresult = (event) => {
            let interimTranscript = '';
            let finalTranscript = '';

            for (let i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {
                    finalTranscript += event.results[i][0].transcript;
                } else {
                    interimTranscript += event.results[i][0].transcript;
                }
            }
            sttOutput.value = finalTranscript + interimTranscript;
        };

        recognition.onerror = (event) => {
            console.error('Speech recognition error:', event.error);
            resultBox.innerHTML = `<p>Error: ${event.error}</p>`;
            resultBox.style.display = 'block';
        };

        startBtn.addEventListener('click', () => {
            recognition.start();
            startBtn.textContent = 'Listening...';
            startBtn.disabled = true;
            resultBox.innerHTML = '';
            resultBox.style.display = 'none';
        });

    } else {
        startBtn.disabled = true;
        sttOutput.value = 'Speech Recognition not supported in this browser.';
        resultBox.innerHTML = '<p>Your browser does not support Web Speech API. Please use Chrome or Edge.</p>';
        resultBox.style.display = 'block';
    }
});