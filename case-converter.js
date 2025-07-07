document.addEventListener('DOMContentLoaded', () => {
    const caseInput = document.getElementById('caseInput');
    const upperBtn = document.getElementById('upperBtn');
    const lowerBtn = document.getElementById('lowerBtn');
    const titleBtn = document.getElementById('titleBtn');
    const sentenceBtn = document.getElementById('sentenceBtn');
    const copyBtn = document.getElementById('copyBtn');

    upperBtn.addEventListener('click', () => {
        caseInput.value = caseInput.value.toUpperCase();
    });

    lowerBtn.addEventListener('click', () => {
        caseInput.value = caseInput.value.toLowerCase();
    });

    titleBtn.addEventListener('click', () => {
        caseInput.value = caseInput.value.replace(/\w\S*/g, (txt) => {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    });

    sentenceBtn.addEventListener('click', () => {
        caseInput.value = caseInput.value.toLowerCase().replace(/(^|\.\s*)([a-z])/g, (match, p1, p2) => {
            return p1 + p2.toUpperCase();
        });
    });

    copyBtn.addEventListener('click', () => {
        caseInput.select();
        document.execCommand('copy');
        alert('Text copied to clipboard!');
    });
});