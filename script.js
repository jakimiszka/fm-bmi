// results
const results = document.querySelector('.calc--results');
const results_welcome = results.querySelector('.calc--results__welcome');
const results_bmi = results.querySelector('.calc--results__bmi');
const results_note = results.querySelector('.calc--results__note');
// raido buttons - system
const systemMetric = document.querySelector('input[id="metric"]');
const systemImperial = document.querySelector('input[id="imperial"]');
// inputs per system sections
const imperial = document.querySelector('.calc--form__imperial');
const metric = document.querySelector('.calc--form__metric');
// all inputs
const inputs = document.querySelectorAll('input[type="text"]');
// metric inputs
const metric_height_input = document.querySelector('input#metric_height');
const metric_weight_input = document.querySelector('input#metric_weight');
// imperial inputs
const imperial_height_ft = document.querySelector('input#imperial_height_ft');
const imperial_height_in = document.querySelector('input#imperial_height_in');
const imperial_weight_st = document.querySelector('input#imperial_weight_st');
const imperial_weight_lbs = document.querySelector('input#imperial_weight_lbs');

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
    const value = input.value;
    const parent = input.parentNode;
    const regexDecimals = RegExp(/^\d+(\.\d{0,2})?$/g);
    const regexLetters = RegExp(/[^a-zA-Z]+/g);

    if(!regexLetters.test(Number(value))){
      input.value = '';
      parent.setAttribute('isValid', false);
    }
    if(!regexDecimals.test(Number(value))){
      input.value = '';
      parent.setAttribute('isValid', false);
    }else{
      parent.setAttribute('isValid', true);
    }

    // metric values
    const metricHeightValue = !!Number(metric_height_input.value);
    const metricWeightValue = !!Number(metric_weight_input.value); 
    //imperial values
    const imperialHeightFTValue = !!Number(imperial_height_ft.value);
    const imperialHeightINValue = !!Number(imperial_height_in.value); 
    const imperialWeightSTValue = !!Number(imperial_weight_st.value);
    const imperialHeightLBSValue = !!Number(imperial_weight_lbs.value); 

    if(systemMetric.checked && metricHeightValue && metricWeightValue){
      results_welcome.style.display = 'none';
      results_bmi.style.display = 'flex';
      results_note.style.display = 'flex';
    }else if(systemImperial.checked && imperialHeightFTValue && imperialHeightINValue && imperialWeightSTValue && imperialHeightLBSValue){
      results_welcome.style.display = 'none';
      results_bmi.style.display = 'flex';
      results_note.style.display = 'flex';
    }else{
      results_welcome.style.display = 'flex';
      results_bmi.style.display = 'none';
      results_note.style.display = 'none';
    }

    
  });
});