document.addEventListener('DOMContentLoaded', () => {
    const ageForm = document.getElementById('ageForm');
    const dobInput = document.getElementById('dobInput');
    const ageResult = document.getElementById('ageResult');

    ageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const dob = new Date(dobInput.value);
        if (dobInput.value) {
            const today = new Date();
            let age = today.getFullYear() - dob.getFullYear();
            const m = today.getMonth() - dob.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
                age--;
            }
            ageResult.innerHTML = `<h2>Your Age is ${age}</h2>`;
            ageResult.style.display = 'block';
        }
    });
});