const results = document.querySelector('.calc--results');
const results_welcome = results.querySelector('.calc--results__welcome');
const results_bmi = results.querySelector('.calc--results__bmi');
const results_note = results.querySelector('.calc--results__note');
const systemMetric = document.querySelector('input[id="metric"]');
const systemImperial = document.querySelector('input[id="imperial"]');
const imperial = document.querySelector('.calc--form__imperial');
const metric = document.querySelector('.calc--form__metric');
const inputs = document.querySelectorAll('input[type="text"]');

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

inputs.forEach(input => {
  input.addEventListener('keyup', function(e){

    if(systemMetric.checked && input.id=='metric_height' && !!input.value
      // && input.id=='metric_weight' && !!input.value
    ){
      results_welcome.style.display = 'none';
      results_bmi.style.display = 'flex';
      results_note.style.display = 'flex';
    } 
    console.log(input.id); 
    // find out which input has value 
    // and when height and weight are givenm then show resutls

    const value = input.value;
    const regexDecimals = RegExp(/^\d+(\.\d{0,1})?$/g);
    const regexLetters = RegExp(/[^a-zA-Z]+/g);
    const parent = input.parentNode;

    if(!regexLetters.test(value)){
      input.value = '';
      parent.setAttribute('isValid', false);
    }
    if(!regexDecimals.test(value)){
      input.value = '';
      parent.setAttribute('isValid', false);
    }else{
      parent.setAttribute('isValid', true);
    }
  });
});