document.getElementById('epochForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const input = document.getElementById('epochInput').value.trim();
  const resultDiv = document.getElementById('epochResult');
  if (!input || isNaN(input)) {
    resultDiv.innerHTML = `<span style='color:#fa5252;'>Please enter a valid epoch time.</span>`;
    resultDiv.style.display = 'block';
    return;
  }
  const date = new Date(Number(input) * 1000);
  if (isNaN(date.getTime())) {
    resultDiv.innerHTML = `<span style='color:#fa5252;'>Invalid epoch time.</span>`;
    resultDiv.style.display = 'block';
    return;
  }
  resultDiv.innerHTML = `<b>Human Date:</b> <span>${date.toLocaleString()}</span> <button id='copyEpoch' style='margin-left:1em;'>Copy</button>`;
  resultDiv.style.display = 'block';
  document.getElementById('copyEpoch').onclick = function() {
    navigator.clipboard.writeText(date.toLocaleString());
    this.textContent = 'Copied!';
    setTimeout(()=>{this.textContent='Copy';}, 1200);
  };
});
