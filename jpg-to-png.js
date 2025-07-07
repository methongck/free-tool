document.addEventListener('DOMContentLoaded', () => {
    const imgForm = document.getElementById('imgForm');
    const imgInput = document.getElementById('imgInput');
    const imgResult = document.getElementById('imgResult');

    imgForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const file = imgInput.files[0];

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

                    const pngUrl = canvas.toDataURL('image/png');

                    const downloadLink = document.createElement('a');
                    downloadLink.href = pngUrl;
                    downloadLink.download = `converted.png`;
                    downloadLink.textContent = 'Download PNG';
                    downloadLink.classList.add('cta-btn');
                    imgResult.innerHTML = '';
                    imgResult.appendChild(downloadLink);
                    imgResult.style.display = 'block';
                };
            };
            reader.readAsDataURL(file);
        } else {
            imgResult.innerHTML = '<p>Please select a JPG image to convert.</p>';
            imgResult.style.display = 'block';
        }
    });
});