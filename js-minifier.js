document.addEventListener('DOMContentLoaded', () => {
    const jsForm = document.getElementById('jsForm');
    const jsInput = document.getElementById('jsInput');
    const jsResult = document.getElementById('jsResult');

    jsForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const jsCode = jsInput.value;

        if (jsCode) {
            // This is a placeholder. Real JavaScript minification requires a library.
            // For example, using a library like 'UglifyJS' or 'Terser' would be ideal.
            const minifiedJs = jsCode.replace(/\/\*[^*]*\*\/|\s\s+|\n|\r/g, ''); // Simple removal of comments and extra spaces

            jsResult.innerHTML = `<textarea rows="8" readonly>${minifiedJs}</textarea>`;
            jsResult.style.display = 'block';
        } else {
            jsResult.innerHTML = '<p>Please enter JavaScript code to minify.</p>';
            jsResult.style.display = 'block';
        }
    });
});