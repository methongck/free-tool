document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('imageInput');
    const formatSelect = document.getElementById('format');
    const webpForm = document.getElementById('webpForm');
    const previewImg = document.getElementById('previewImg');
    const convertedImg = document.getElementById('convertedImg');
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

    webpForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const file = imageInput.files[0];
        const format = formatSelect.value;

        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const img = new Image();
                img.src = event.target.result;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');

                    canvas.width = img.width;
                    canvas.height = img.height;
                    ctx.drawImage(img, 0, 0);

                    const mimeType = format === 'png' ? 'image/png' : 'image/jpeg';
                    const extension = format === 'png' ? 'png' : 'jpg';

                    canvas.toBlob((blob) => {
                        const convertedImageUrl = URL.createObjectURL(blob);
                        convertedImg.src = convertedImageUrl;
                        convertedImg.style.display = 'block';

                        const downloadLink = document.createElement('a');
                        downloadLink.href = convertedImageUrl;
                        downloadLink.download = `converted.${extension}`;
                        downloadLink.textContent = `Download Converted ${format.toUpperCase()}`;
                        downloadLink.classList.add('cta-btn');
                        resultBox.innerHTML = '';
                        resultBox.appendChild(downloadLink);
                        resultBox.style.display = 'block';
                    }, mimeType);
                };
            };
            reader.readAsDataURL(file);
        } else {
            resultBox.innerHTML = '<p>Please select an image to convert.</p>';
            resultBox.style.display = 'block';
        }
    });
});