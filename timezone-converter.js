const timezones = [
  'UTC','America/New_York','America/Chicago','America/Denver','America/Los_Angeles','Europe/London','Europe/Paris','Europe/Berlin','Europe/Moscow','Asia/Dhaka','Asia/Kolkata','Asia/Tokyo','Asia/Shanghai','Asia/Dubai','Australia/Sydney'
];
const fromTz = document.getElementById('fromTz');
const toTz = document.getElementById('toTz');
timezones.forEach(tz => {
  fromTz.innerHTML += `<option value='${tz}'>${tz}</option>`;
  toTz.innerHTML += `<option value='${tz}'>${tz}</option>`;
});
fromTz.value = 'UTC';
toTz.value = 'Asia/Dhaka';

document.getElementById('tzForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const dateVal = document.getElementById('fromDate').value;
  const from = fromTz.value;
  const to = toTz.value;
  const resultDiv = document.getElementById('tzResult');
  if (!dateVal) {
    resultDiv.innerHTML = `<span style='color:#fa5252;'>Please select a date and time.</span>`;
    resultDiv.style.display = 'block';
    return;
  }
  try {
    const date = new Date(dateVal);
    // Convert to UTC
    const utc = new Date(date.getTime() - (date.getTimezoneOffset() * 60000));
    // Format for from timezone
    const fromStr = utc.toLocaleString('en-US', { timeZone: from });
    const toStr = utc.toLocaleString('en-US', { timeZone: to });
    resultDiv.innerHTML = `<b>${from}:</b> ${fromStr}<br><b>${to}:</b> ${toStr} <button id='copyTz' style='margin-left:1em;'>Copy</button>`;
    resultDiv.style.display = 'block';
    document.getElementById('copyTz').onclick = function() {
      navigator.clipboard.writeText(`${to}: ${toStr}`);
      this.textContent = 'Copied!';
      setTimeout(()=>{this.textContent='Copy';}, 1200);
    };
  } catch (err) {
    resultDiv.innerHTML = `<span style='color:#fa5252;'>Conversion error.</span>`;
    resultDiv.style.display = 'block';
  }
});
