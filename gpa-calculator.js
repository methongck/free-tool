document.addEventListener('DOMContentLoaded', () => {
    const gpaForm = document.getElementById('gpaForm');
    const addSubjectBtn = document.getElementById('addSubject');
    const gpaInputsDiv = document.getElementById('gpaInputs');
    const gpaResult = document.getElementById('gpaResult');
    let subjectCount = 0;

    const addSubjectInput = () => {
        subjectCount++;
        const subjectDiv = document.createElement('div');
        subjectDiv.classList.add('subject-input-group');
        subjectDiv.innerHTML = `
            <label>Subject ${subjectCount}</label>
            <input type="number" class="credits" placeholder="Credits" min="0" step="0.1" required>
            <input type="number" class="grade" placeholder="Grade (0-100)" min="0" max="100" required>
        `;
        gpaInputsDiv.appendChild(subjectDiv);
    };

    addSubjectBtn.addEventListener('click', addSubjectInput);

    gpaForm.addEventListener('submit', (e) => {
        e.preventDefault();
        let totalCredits = 0;
        let totalGradePoints = 0;

        const creditsInputs = document.querySelectorAll('.credits');
        const gradeInputs = document.querySelectorAll('.grade');

        for (let i = 0; i < creditsInputs.length; i++) {
            const credits = parseFloat(creditsInputs[i].value);
            const grade = parseFloat(gradeInputs[i].value);

            if (!isNaN(credits) && !isNaN(grade) && credits >= 0 && grade >= 0 && grade <= 100) {
                totalCredits += credits;
                totalGradePoints += credits * grade;
            } else {
                gpaResult.innerHTML = `<p>Please enter valid numbers for all subjects.</p>`;
                gpaResult.style.display = 'block';
                return;
            }
        }

        if (totalCredits > 0) {
            const gpa = totalGradePoints / totalCredits;
            gpaResult.innerHTML = `<h2>Your GPA is: ${gpa.toFixed(2)}</h2>`;
            gpaResult.style.display = 'block';
        } else {
            gpaResult.innerHTML = `<p>Please add at least one subject.</p>`;
            gpaResult.style.display = 'block';
        }
    });

    // Add initial subject input
    addSubjectInput();
});