document.addEventListener('DOMContentLoaded', () => {
    const cssForm = document.getElementById('cssForm');
    const cssInput = document.getElementById('cssInput');
    const cssResult = document.getElementById('cssResult');

    cssForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const cssCode = cssInput.value;

        if (cssCode) {
            const minifiedCss = cssCode
                .replace(/\/\*[^*]*\*\/|\s\s+|\n|\r/g, '') // Remove comments, extra spaces, newlines
                .replace(/\s*([{}|:;,])\s*/g, '$1') // Remove spaces around braces, colons, semicolons
                .replace(/;}/g, '}'); // Remove semicolon before closing brace

            cssResult.innerHTML = `<textarea rows="8" readonly>${minifiedCss}</textarea>`;
            cssResult.style.display = 'block';
        } else {
            cssResult.innerHTML = '<p>Please enter CSS code to minify.</p>';
            cssResult.style.display = 'block';
        }
    });
});