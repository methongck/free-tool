document.addEventListener('DOMContentLoaded', () => {
    const addCourseBtn = document.getElementById('addCourseBtn');
    const calculateBtn = document.getElementById('calculateBtn');
    const coursesDiv = document.getElementById('courses');
    const resultsDiv = document.getElementById('results');
    let courseCount = 0;

    addCourseBtn.addEventListener('click', () => {
        courseCount++;
        const courseDiv = document.createElement('div');
        courseDiv.innerHTML = `<h3>Course ${courseCount}</h3>
            <input type="number" placeholder="Credits" class="credits">
            <input type="number" placeholder="Grade" class="grade">`;
        coursesDiv.appendChild(courseDiv);
    });

    calculateBtn.addEventListener('click', () => {
        const credits = document.querySelectorAll('.credits');
        const grades = document.querySelectorAll('.grade');
        let totalCredits = 0;
        let totalGradePoints = 0;

        for (let i = 0; i < credits.length; i++) {
            const credit = parseFloat(credits[i].value);
            const grade = parseFloat(grades[i].value);
            if (!isNaN(credit) && !isNaN(grade)) {
                totalCredits += credit;
                totalGradePoints += credit * grade;
            }
        }

        if (totalCredits > 0) {
            const cgpa = totalGradePoints / totalCredits;
            resultsDiv.innerHTML = `<p>CGPA: ${cgpa.toFixed(2)}</p>`;
        }
    });
});