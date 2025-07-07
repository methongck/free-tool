document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const copyBtn = document.getElementById('copyBtn');
    const paraCountInput = document.getElementById('paraCount');
    const resultBox = document.getElementById('resultBox');

    const loremIpsumText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

    generateBtn.addEventListener('click', () => {
        const paraCount = parseInt(paraCountInput.value);
        if (isNaN(paraCount) || paraCount < 1 || paraCount > 10) {
            resultBox.innerHTML = '<p>Please enter a number between 1 and 10 for paragraphs.</p>';
            resultBox.style.display = 'block';
            return;
        }

        let generatedText = '';
        for (let i = 0; i < paraCount; i++) {
            generatedText += `<p>${loremIpsumText}</p>`;
        }
        resultBox.innerHTML = generatedText;
        resultBox.style.display = 'block';
    });

    copyBtn.addEventListener('click', () => {
        const textToCopy = resultBox.innerText;
        if (textToCopy) {
            navigator.clipboard.writeText(textToCopy).then(() => {
                alert('Lorem Ipsum copied to clipboard!');
            }).catch(err => {
                console.error('Could not copy text: ', err);
            });
        } else {
            alert('No text to copy.');
        }
    });
});