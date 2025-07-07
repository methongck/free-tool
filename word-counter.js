document.addEventListener('DOMContentLoaded', () => {
    const textInput = document.getElementById('textInput');
    const resultBox = document.getElementById('resultBox');

    textInput.addEventListener('input', () => {
        const text = textInput.value.trim();
        if (text) {
            const words = text.split(/\s+/).filter(word => word.length > 0).length;
            const characters = text.length;
            const sentences = text.split(/[.!?]+/).filter(sentence => sentence.length > 0).length;
            const paragraphs = text.split(/\n\s*\n/).filter(paragraph => paragraph.length > 0).length;

            resultBox.innerHTML = `
                <p>Words: ${words}</p>
                <p>Characters: ${characters}</p>
                <p>Sentences: ${sentences}</p>
                <p>Paragraphs: ${paragraphs}</p>
            `;
            resultBox.style.display = 'block';
        } else {
            resultBox.innerHTML = '';
            resultBox.style.display = 'none';
        }
    });
});