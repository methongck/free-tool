document.addEventListener('DOMContentLoaded', () => {
    const qrImageInput = document.getElementById('qrImageInput');
    const scanQrResult = document.getElementById('scanQrResult');

    qrImageInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
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
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
                    const code = jsQR(imageData.data, imageData.width, imageData.height, { inversionAttempts: "dontInvert" });

                    if (code) {
                        scanQrResult.innerHTML = `<p>QR Code: ${code.data}</p>`;
                        scanQrResult.style.display = 'block';
                    } else {
                        scanQrResult.innerHTML = '<p>No QR code found in the image.</p>';
                        scanQrResult.style.display = 'block';
                    }
                };
            };
            reader.readAsDataURL(file);
        } else {
            scanQrResult.innerHTML = '<p>Please select an image to scan.</p>';
            scanQrResult.style.display = 'block';
        }
    });
});