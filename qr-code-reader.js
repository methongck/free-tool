document.addEventListener('DOMContentLoaded', () => {
    const qrVideo = document.getElementById('qrVideo');
    const startScanBtn = document.getElementById('startScan');
    const qrReadResult = document.getElementById('qrReadResult');
    let stream;

    startScanBtn.addEventListener('click', async () => {
        try {
            stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: "environment" } });
            qrVideo.srcObject = stream;
            qrVideo.setAttribute("playsinline", true); // required to tell iOS safari we don't want fullscreen
            qrVideo.play();
            requestAnimationFrame(tick);
        } catch (err) {
            console.error("Error accessing camera: ", err);
            qrReadResult.innerHTML = '<p>Error accessing camera. Please ensure you have a webcam and grant permission.</p>';
            qrReadResult.style.display = 'block';
        }
    });

    function tick() {
        if (qrVideo.readyState === qrVideo.HAVE_ENOUGH_DATA) {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.height = qrVideo.videoHeight;
            canvas.width = qrVideo.videoWidth;
            ctx.drawImage(qrVideo, 0, 0, canvas.width, canvas.height);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const code = jsQR(imageData.data, imageData.width, imageData.height, { inversionAttempts: "dontInvert" });

            if (code) {
                qrReadResult.innerHTML = `<p>QR Code: ${code.data}</p>`;
                qrReadResult.style.display = 'block';
                if (stream) {
                    stream.getTracks().forEach(track => track.stop());
                }
                return;
            }
        }
        requestAnimationFrame(tick);
    }
});