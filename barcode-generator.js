document.addEventListener('DOMContentLoaded', () => {
    const barcodeForm = document.getElementById('barcodeForm');
    const barcodeInput = document.getElementById('barcodeInput');
    const barcodeResult = document.getElementById('barcodeResult');

    barcodeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const value = barcodeInput.value.trim();
        if (value) {
            barcodeResult.innerHTML = '<svg id="barcode"></svg>';
            JsBarcode("#barcode", value, {
                format: "CODE128",
                displayValue: true,
                fontSize: 18,
                height: 80,
                width: 2
            });
            barcodeResult.style.display = 'block';
        } else {
            barcodeResult.innerHTML = '<p>Please enter a value to generate a barcode.</p>';
            barcodeResult.style.display = 'block';
        }
    });
});