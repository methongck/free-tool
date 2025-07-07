document.addEventListener('DOMContentLoaded', () => {
    const imageInput = document.getElementById('imageInput');
    const qualityInput = document.getElementById('quality');
    const qualityValueSpan = document.getElementById('qualityValue');
    const compressForm = document.getElementById('compressForm');
    const previewImg = document.getElementById('previewImg');
    const compressedImg = document.getElementById('compressedImg');
    const resultBox = document.getElementById('resultBox');

    qualityInput.addEventListener('input', () => {
        qualityValueSpan.textContent = qualityInput.value;
    });

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

    compressForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const file = imageInput.files[0];
        const quality = parseFloat(qualityInput.value) / 100;

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

                    canvas.toBlob((blob) => {
                        const compressedImageUrl = URL.createObjectURL(blob);
                        compressedImg.src = compressedImageUrl;
                        compressedImg.style.display = 'block';

                        const downloadLink = document.createElement('a');
                        downloadLink.href = compressedImageUrl;
                        downloadLink.download = `compressed_${file.name}`;
                        downloadLink.textContent = 'Download Compressed Image';
                        downloadLink.classList.add('cta-btn');
                        resultBox.innerHTML = '';
                        resultBox.appendChild(downloadLink);
                        resultBox.style.display = 'block';
                    }, 'image/jpeg', quality);
                };
            };
            reader.readAsDataURL(file);
        } else {
            resultBox.innerHTML = '<p>Please select an image to compress.</p>';
            resultBox.style.display = 'block';
        }
    });
});