document.addEventListener('DOMContentLoaded', () => {
    const formatBtn = document.getElementById('formatBtn');
    const xmlInput = document.getElementById('xmlInput');
    const resultsDiv = document.getElementById('results');

    formatBtn.addEventListener('click', () => {
        const xml = xmlInput.value.trim();
        if (xml) {
            try {
                const formattedXml = formatXml(xml);
                resultsDiv.textContent = formattedXml;
            } catch (e) {
                resultsDiv.textContent = 'Invalid XML';
            }
        }
    });

    function formatXml(xml) {
        let formatted = '';
        let reg = /(>)(<)(\/\*)/g;
        xml = xml.replace(reg, '$1\r\n$2$3');
        let pad = 0;
        xml.split(/\r\n/).forEach(node => {
            let indent = 0;
            if (node.match(/.+<\/\w[^>]*>$/)) {
                indent = 0;
            } else if (node.match(/^<\/\w/)) {
                if (pad !== 0) {
                    pad -= 1;
                }
            } else if (node.match(/^<\w[^>]*[^\/]>.*$/)) {
                indent = 1;
            } else {
                indent = 0;
            }

            let padding = '';
            for (let i = 0; i < pad; i++) {
                padding += '  ';
            }

            formatted += padding + node + '\r\n';
            pad += indent;
        });

        return formatted;
    }
});