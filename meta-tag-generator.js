document.addEventListener('DOMContentLoaded', () => {
    const generateBtn = document.getElementById('generateBtn');
    const copyBtn = document.getElementById('copyBtn');
    const titleInput = document.getElementById('title');
    const descInput = document.getElementById('desc');
    const keywordsInput = document.getElementById('keywords');
    const authorInput = document.getElementById('author');
    const resultBox = document.getElementById('resultBox');

    generateBtn.addEventListener('click', () => {
        const title = titleInput.value.trim();
        const description = descInput.value.trim();
        const keywords = keywordsInput.value.trim();
        const author = authorInput.value.trim();

        let metaTags = '';
        if (title) {
            metaTags += `<meta property="og:title" content="${title}">
<meta name="twitter:title" content="${title}">
<meta itemprop="name" content="${title}">
<title>${title}</title>\n`;
        }
        if (description) {
            metaTags += `<meta name="description" content="${description}">
<meta property="og:description" content="${description}">
<meta name="twitter:description" content="${description}">
<meta itemprop="description" content="${description}">\n`;
        }
        if (keywords) {
            metaTags += `<meta name="keywords" content="${keywords}">\n`;
        }
        if (author) {
            metaTags += `<meta name="author" content="${author}">\n`;
        }

        if (metaTags) {
            resultBox.innerHTML = `<pre>${metaTags}</pre>`;
            resultBox.style.display = 'block';
        } else {
            resultBox.innerHTML = '<p>Please fill in at least one field to generate meta tags.</p>';
            resultBox.style.display = 'block';
        }
    });

    copyBtn.addEventListener('click', () => {
        const textToCopy = resultBox.querySelector('pre').innerText;
        if (textToCopy) {
            navigator.clipboard.writeText(textToCopy).then(() => {
                alert('Meta tags copied to clipboard!');
            }).catch(err => {
                console.error('Could not copy text: ', err);
            });
        } else {
            alert('No meta tags to copy.');
        }
    });
});