document.addEventListener('DOMContentLoaded', () => {
    const htmlForm = document.getElementById('htmlForm');
    const htmlInput = document.getElementById('htmlInput');
    const htmlResult = document.getElementById('htmlResult');

    htmlForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const htmlCode = htmlInput.value;

        if (htmlCode) {
            // This is a placeholder. Real HTML beautification requires a library.
            // For example, using a library like 'js-beautify' would be ideal.
            const beautifiedHtml = htmlCode.replace(/</g, '&lt;').replace(/>/g, '&gt;'); // Simple escaping for display

            htmlResult.innerHTML = `<pre style="text-align: left;">${beautifiedHtml}</pre>`;
            htmlResult.style.display = 'block';
        } else {
            htmlResult.innerHTML = '<p>Please enter HTML code to beautify.</p>';
            htmlResult.style.display = 'block';
        }
    });
});