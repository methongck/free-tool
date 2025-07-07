document.addEventListener('DOMContentLoaded', () => {
    const colorInput = document.getElementById('colorInput');
    const colorResult = document.getElementById('colorResult');

    const updateColorInfo = (color) => {
        // Convert HEX to RGB
        const hexToRgb = (hex) => {
            const bigint = parseInt(hex.slice(1), 16);
            const r = (bigint >> 16) & 255;
            const g = (bigint >> 8) & 255;
            const b = bigint & 255;
            return `rgb(${r}, ${g}, ${b})`;
        };

        // Convert RGB to HSL
        const rgbToHsl = (r, g, b) => {
            r /= 255; g /= 255; b /= 255;
            const max = Math.max(r, g, b), min = Math.min(r, g, b);
            let h, s, l = (max + min) / 2;

            if (max === min) {
                h = s = 0; // achromatic
            } else {
                const d = max - min;
                s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
                switch (max) {
                    case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                    case g: h = (b - r) / d + 2; break;
                    case b: h = (r - g) / d + 4; break;
                }
                h /= 6;
            }
            return `hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`;
        };

        const hex = color;
        const rgb = hexToRgb(hex);
        const rgbValues = rgb.match(/\d+/g).map(Number);
        const hsl = rgbToHsl(rgbValues[0], rgbValues[1], rgbValues[2]);

        colorResult.innerHTML = `
            <div style="background-color: ${hex}; width: 50px; height: 50px; border-radius: 50%; margin: 0 auto 1em;"></div>
            <p>HEX: ${hex}</p>
            <p>RGB: ${rgb}</p>
            <p>HSL: ${hsl}</p>
        `;
        colorResult.style.display = 'block';
    };

    colorInput.addEventListener('input', (e) => {
        updateColorInfo(e.target.value);
    });

    // Initial update
    updateColorInfo(colorInput.value);
});