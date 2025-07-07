document.addEventListener('DOMContentLoaded', () => {
    const resizeForm = document.getElementById('resizeForm');
    const imgInput = document.getElementById('imgInput');
    const widthInput = document.getElementById('width');
    const heightInput = document.getElementById('height');
    const resizeResult = document.getElementById('resizeResult');

    resizeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const file = imgInput.files[0];
        const newWidth = parseInt(widthInput.value);
        const newHeight = parseInt(heightInput.value);

        if (file && !isNaN(newWidth) && !isNaN(newHeight) && newWidth > 0 && newHeight > 0) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const img = new Image();
                img.src = event.target.result;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');

                    canvas.width = newWidth;
                    canvas.height = newHeight;
                    ctx.drawImage(img, 0, 0, newWidth, newHeight);

                    const resizedImageUrl = canvas.toDataURL(file.type);

                    const downloadLink = document.createElement('a');
                    downloadLink.href = resizedImageUrl;
                    downloadLink.download = `resized_${file.name}`;
                    downloadLink.textContent = 'Download Resized Image';
                    downloadLink.classList.add('cta-btn');
                    resizeResult.innerHTML = '';
                    resizeResult.appendChild(downloadLink);
                    resizeResult.style.display = 'block';
                };
            };
            reader.readAsDataURL(file);
        } else {
            resizeResult.innerHTML = '<p>Please select an image and enter valid dimensions.</p>';
            resizeResult.style.display = 'block';
        }
    });
});