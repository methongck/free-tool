document.addEventListener('DOMContentLoaded', () => {
    const ogForm = document.getElementById('ogForm');
    const ogUrlInput = document.getElementById('ogUrl');
    const ogResult = document.getElementById('ogResult');

    ogForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const url = ogUrlInput.value.trim();

        if (url) {
            ogResult.innerHTML = '<p>Fetching Open Graph data... (This feature requires a server-side solution to bypass CORS)</p>';
            ogResult.style.display = 'block';

            // Placeholder for actual Open Graph fetching and parsing logic
            setTimeout(() => {
                ogResult.innerHTML = `
                    <div style="border: 1px solid #ccc; padding: 1em; border-radius: 8px; text-align: left;">
                        <h3>Simulated Open Graph Preview</h3>
                        <p><strong>Title:</strong> Example Open Graph Title</p>
                        <p><strong>Description:</strong> This is a simulated description for the Open Graph preview.</p>
                        <p><strong>Image:</strong> <img src="https://via.placeholder.com/150" alt="Placeholder Image" style="max-width: 100px;"></p>
                        <p><strong>URL:</strong> ${url}</p>
                    </div>
                `;
            }, 2000);
        } else {
            ogResult.innerHTML = '<p>Please enter a URL to preview.</p>';
            ogResult.style.display = 'block';
        }
    });
});