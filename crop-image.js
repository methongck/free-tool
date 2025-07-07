document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('imageInput');
    const cropX = document.getElementById('cropX');
    const cropY = document.getElementById('cropY');
    const cropW = document.getElementById('cropW');
    const cropH = document.getElementById('cropH');
    const cropForm = document.getElementById('cropForm');
    const resultBox = document.getElementById('resultBox');

    cropForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const file = imageInput.files[0];

        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const img = new Image();
                img.src = event.target.result;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');

                    const x = parseFloat(cropX.value);
                    const y = parseFloat(cropY.value);
                    const width = parseFloat(cropW.value);
                    const height = parseFloat(cropH.value);

                    canvas.width = width;
                    canvas.height = height;

                    ctx.drawImage(img, x, y, width, height, 0, 0, width, height);

                    const croppedImageUrl = canvas.toDataURL('image/png');

                    const downloadLink = document.createElement('a');
                    downloadLink.href = croppedImageUrl;
                    downloadLink.download = `cropped_${file.name}`;
                    downloadLink.textContent = 'Download Cropped Image';
                    downloadLink.classList.add('cta-btn');
                    resultBox.innerHTML = '';
                    resultBox.appendChild(downloadLink);
                    resultBox.style.display = 'block';
                };
            };
            reader.readAsDataURL(file);
        } else {
            resultBox.innerHTML = '<p>Please select an image to crop.</p>';
            resultBox.style.display = 'block';
        }
    });
});