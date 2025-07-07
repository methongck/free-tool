document.addEventListener('DOMContentLoaded', () => {
    const unitTypeSelect = document.getElementById('unitType');
    const fromValueInput = document.getElementById('fromValue');
    const fromUnitSelect = document.getElementById('fromUnit');
    const toUnitSelect = document.getElementById('toUnit');
    const unitForm = document.getElementById('unitForm');
    const unitResult = document.getElementById('unitResult');

    const units = {
        length: {
            meter: 1,
            kilometer: 1000,
            centimeter: 0.01,
            millimeter: 0.001,
            micrometer: 0.000001,
            nanometer: 0.000000001,
            mile: 1609.34,
            yard: 0.9144,
            foot: 0.3048,
            inch: 0.0254,
            'light-year': 9.461e15
        },
        weight: {
            kilogram: 1,
            gram: 0.001,
            milligram: 0.000001,
            pound: 0.453592,
            ounce: 0.0283495,
            tonne: 1000
        },
        temperature: {
            celsius: { toKelvin: (c) => c + 273.15, fromKelvin: (k) => k - 273.15 },
            fahrenheit: { toKelvin: (f) => (f - 32) * 5/9 + 273.15, fromKelvin: (k) => (k - 273.15) * 9/5 + 32 },
            kelvin: { toKelvin: (k) => k, fromKelvin: (k) => k }
        }
    };

    const populateUnits = () => {
        const selectedType = unitTypeSelect.value;
        const selectedUnits = units[selectedType];

        fromUnitSelect.innerHTML = '';
        toUnitSelect.innerHTML = '';

        for (const unit in selectedUnits) {
            const option1 = document.createElement('option');
            option1.value = unit;
            option1.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
            fromUnitSelect.appendChild(option1);

            const option2 = document.createElement('option');
            option2.value = unit;
            option2.textContent = unit.charAt(0).toUpperCase() + unit.slice(1);
            toUnitSelect.appendChild(option2);
        }
    };

    unitTypeSelect.addEventListener('change', populateUnits);

    unitForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const value = parseFloat(fromValueInput.value);
        const fromUnit = fromUnitSelect.value;
        const toUnit = toUnitSelect.value;
        const unitType = unitTypeSelect.value;

        if (isNaN(value)) {
            unitResult.innerHTML = '<p>Please enter a valid number.</p>';
            unitResult.style.display = 'block';
            return;
        }

        let convertedValue;
        if (unitType === 'temperature') {
            const kelvinValue = units[unitType][fromUnit].toKelvin(value);
            convertedValue = units[unitType][toUnit].fromKelvin(kelvinValue);
        } else {
            const baseValue = value * units[unitType][fromUnit];
            convertedValue = baseValue / units[unitType][toUnit];
        }

        unitResult.innerHTML = `<h2>${value} ${fromUnit} = ${convertedValue.toFixed(4)} ${toUnit}</h2>`;
        unitResult.style.display = 'block';
    });

    populateUnits(); // Initial population
});