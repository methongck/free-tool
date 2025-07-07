document.addEventListener('DOMContentLoaded', () => {
    const qrForm = document.getElementById('qrForm');
    const qrInput = document.getElementById('qrInput');
    const qrResult = document.getElementById('qrResult');

    qrForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const value = qrInput.value.trim();
        if (value) {
            qrResult.innerHTML = ''; // Clear previous QR code
            new QRCode(qrResult, {
                text: value,
                width: 200,
                height: 200,
                colorDark: "#000000",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.H
            });
            qrResult.style.display = 'block';
        } else {
            qrResult.innerHTML = '<p>Please enter text or a URL to generate a QR code.</p>';
            qrResult.style.display = 'block';
        }
    });
});