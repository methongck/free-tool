document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('imageInput');
    const base64Form = document.getElementById('base64Form');
    const previewImg = document.getElementById('previewImg');
    const resultBox = document.getElementById('resultBox');

    imageInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                previewImg.src = event.target.result;
                previewImg.style.display = 'block';
            };
            reader.readAsDataURL(file);
        }
    });

    base64Form.addEventListener('submit', (e) => {
        e.preventDefault();
        const file = imageInput.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const base64String = event.target.result;
                resultBox.innerHTML = `
                    <textarea rows="10" readonly>${base64String}</textarea>
                    <button id="copyBase64Btn" class="cta-btn">Copy to Clipboard</button>
                `;
                resultBox.style.display = 'block';

                document.getElementById('copyBase64Btn').addEventListener('click', () => {
                    const textarea = resultBox.querySelector('textarea');
                    textarea.select();
                    document.execCommand('copy');
                    alert('Base64 code copied to clipboard!');
                });
            };
            reader.readAsDataURL(file);
        } else {
            resultBox.innerHTML = '<p>Please select an image to convert.</p>';
            resultBox.style.display = 'block';
        }
    });
});