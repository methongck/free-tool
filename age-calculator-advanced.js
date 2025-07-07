const dobInput = document.getElementById('dobInput');
const resultDiv = document.getElementById('advAgeResult');
let timer;

dobInput.addEventListener('input', function() {
  if (timer) clearInterval(timer);
  updateAge();
  timer = setInterval(updateAge, 1000);
});

document.addEventListener('DOMContentLoaded', function() {
  if (dobInput.value) {
    updateAge();
    timer = setInterval(updateAge, 1000);
  }
});

function updateAge() {
  const dob = dobInput.value;
  if (!dob) {
    resultDiv.style.display = 'none';
    if (timer) clearInterval(timer);
    return;
  }
  const birth = new Date(dob);
  const now = new Date();
  if (birth > now) {
    resultDiv.innerHTML = `<span style='color:#fa5252;'>Future date not allowed.</span>`;
    resultDiv.style.display = 'block';
    if (timer) clearInterval(timer);
    return;
  }
  let diff = now - birth;
  let years = now.getFullYear() - birth.getFullYear();
  let months = now.getMonth() - birth.getMonth();
  let days = now.getDate() - birth.getDate();
  if (days < 0) {
    months--;
    days += new Date(now.getFullYear(), now.getMonth(), 0).getDate();
  }
  if (months < 0) {
    years--;
    months += 12;
  }
  // Total days, weeks, hours, minutes, seconds
  let totalDays = Math.floor(diff / (1000 * 60 * 60 * 24));
  let weeks = Math.floor(totalDays / 7);
  let hours = Math.floor(diff / (1000 * 60 * 60));
  let minutes = Math.floor(diff / (1000 * 60));
  let seconds = Math.floor(diff / 1000);
  resultDiv.innerHTML = `
    <div class="age-flex">
      <div class="age-main">
        <span class="age-label">বয়স:</span>
        <span class="age-value">${years} বছর, ${months} মাস, ${days} দিন</span>
      </div>
      <div class="age-row"><span class="age-label">সপ্তাহ:</span> <span class="age-value">${weeks}</span></div>
      <div class="age-row"><span class="age-label">দিন:</span> <span class="age-value">${totalDays}</span></div>
      <div class="age-row"><span class="age-label">ঘন্টা:</span> <span class="age-value">${hours}</span></div>
      <div class="age-row"><span class="age-label">মিনিট:</span> <span class="age-value">${minutes}</span></div>
      <div class="age-row"><span class="age-label">সেকেন্ড:</span> <span class="age-value age-second">${seconds}</span></div>
    </div>
  `;
  resultDiv.style.display = 'block';
}
