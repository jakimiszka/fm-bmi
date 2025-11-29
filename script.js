const clacForm = document.querySelector('.calc--form');
const weightImperial = document.querySelector('.calc--form__imperial--weight');
const heightImperial = document.querySelector('.calc--form__imperial--height');
const weightMetric = document.querySelector('.calc--form__metric--weight');
const heightMetric = document.querySelector('.calc--form__metric--height');

document.querySelectorAll('input[type="radio"]').forEach(radio => {
  radio.addEventListener('change', function() {
    if (radio.id === 'metric') {
      // weightImperial.style.display = 'none';
      // heightImperial.style.display = 'none';
      // weightMetric.style.display = 'flex';
      // heightMetric.style.display = 'flex';
    } else if (radio.id === 'imperial') {
      // weightImperial.style.display = 'flex';
      // heightImperial.style.display = 'flex';
      // weightMetric.style.display = 'none';
      // heightMetric.style.display = 'none';
    }
  });
});