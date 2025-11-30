const clacForm = document.querySelector('.calc--form');
const imperial = document.querySelector('.calc--form__imperial');
const metric = document.querySelector('.calc--form__metric');

document.querySelectorAll('input[type="radio"]').forEach(radio => {
  radio.addEventListener('change', function() {
    if (radio.id === 'metric') {
      imperial.style.display = 'none';
      metric.style.display = 'flex';
    } else if (radio.id === 'imperial') {
       imperial.style.display = 'flex';
       metric.style.display = 'none';
    }
  });
});