document.addEventListener('DOMContentLoaded', () => {
    const regexForm = document.getElementById('regexForm');
    const regexInput = document.getElementById('regexInput');
    const testTextInput = document.getElementById('testText');
    const regexResult = document.getElementById('regexResult');

    regexForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const regexPattern = regexInput.value;
        const testText = testTextInput.value;

        if (regexPattern && testText) {
            try {
                const regex = new RegExp(regexPattern, 'g');
                const matches = testText.match(regex);

                if (matches && matches.length > 0) {
                    regexResult.innerHTML = `<h2>Matches Found: ${matches.length}</h2><p>${matches.join(', ')}</p>`;
                } else {
                    regexResult.innerHTML = '<p>No matches found.</p>';
                }
                regexResult.style.display = 'block';
            } catch (error) {
                regexResult.innerHTML = `<p>Invalid Regex: ${error.message}</p>`;
                regexResult.style.display = 'block';
            }
        } else {
            regexResult.innerHTML = '<p>Please enter both a regex pattern and test text.</p>';
            regexResult.style.display = 'block';
        }
    });
});