document.addEventListener('DOMContentLoaded', () => {
    const utmForm = document.getElementById('utmForm');
    const baseUrlInput = document.getElementById('baseUrl');
    const sourceInput = document.getElementById('source');
    const mediumInput = document.getElementById('medium');
    const campaignInput = document.getElementById('campaign');
    const termInput = document.getElementById('term');
    const contentInput = document.getElementById('content');
    const utmResult = document.getElementById('utmResult');

    utmForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const baseUrl = baseUrlInput.value.trim();
        const source = sourceInput.value.trim();
        const medium = mediumInput.value.trim();
        const campaign = campaignInput.value.trim();
        const term = termInput.value.trim();
        const content = contentInput.value.trim();

        if (baseUrl && source && medium && campaign) {
            let utmLink = `${baseUrl}?utm_source=${source}&utm_medium=${medium}&utm_campaign=${campaign}`;
            if (term) {
                utmLink += `&utm_term=${term}`;
            }
            if (content) {
                utmLink += `&utm_content=${content}`;
            }

            utmResult.innerHTML = `<textarea rows="3" readonly>${utmLink}</textarea><button id="copyUtmBtn" class="cta-btn">Copy to Clipboard</button>`;
            utmResult.style.display = 'block';

            document.getElementById('copyUtmBtn').addEventListener('click', () => {
                const textarea = utmResult.querySelector('textarea');
                textarea.select();
                document.execCommand('copy');
                alert('UTM link copied to clipboard!');
            });
        } else {
            utmResult.innerHTML = '<p>Please fill in all required fields (Base URL, Source, Medium, Campaign).</p>';
            utmResult.style.display = 'block';
        }
    });
});