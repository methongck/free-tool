document.addEventListener('DOMContentLoaded', () => {
    const statusForm = document.getElementById('statusForm');
    const urlInput = document.getElementById('url');
    const statusResult = document.getElementById('statusResult');

    statusForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const url = urlInput.value.trim();

        if (url) {
            statusResult.innerHTML = '<p>Checking status... (This feature requires a server-side proxy to bypass CORS)</p>';
            statusResult.style.display = 'block';

            // Placeholder for actual website status check
            setTimeout(() => {
                // Simulate a successful or failed check
                const isOnline = Math.random() > 0.5;
                if (isOnline) {
                    statusResult.innerHTML = `<p style="color: green;">${url} is Online!</p>`;
                } else {
                    statusResult.innerHTML = `<p style="color: red;">${url} is Offline or unreachable.</p>`;
                }
            }, 2000);
        } else {
            statusResult.innerHTML = '<p>Please enter a URL to check its status.</p>';
            statusResult.style.display = 'block';
        }
    });
});