document.addEventListener('DOMContentLoaded', () => {
    const jsonForm = document.getElementById('jsonForm');
    const jsonInput = document.getElementById('jsonInput');
    const jsonResult = document.getElementById('jsonResult');

    jsonForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const jsonCode = jsonInput.value;

        if (jsonCode) {
            try {
                const parsedJson = JSON.parse(jsonCode);
                const formattedJson = JSON.stringify(parsedJson, null, 2);
                jsonResult.innerHTML = `<pre style="text-align: left;">${formattedJson}</pre>`;
                jsonResult.style.display = 'block';
            } catch (error) {
                jsonResult.innerHTML = `<p>Invalid JSON: ${error.message}</p>`;
                jsonResult.style.display = 'block';
            }
        } else {
            jsonResult.innerHTML = '<p>Please enter JSON code to format.</p>';
            jsonResult.style.display = 'block';
        }
    });
});