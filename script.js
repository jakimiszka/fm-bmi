// results
const results = document.querySelector('.calc--results');
const results_welcome = results.querySelector('.calc--results__welcome');
const results_bmi = results.querySelector('.calc--results__bmi');
// results - bmi
const results_bmi_value = results.querySelector('#bmi_value');
// results - note
const results_note_category = results.querySelector('#bmi_category');
const results_note_range_from = results.querySelector('#bmi_range_from');
const results_note_range_to = results.querySelector('#bmi_range_to');

// raido buttons - system
const systemMetric = document.querySelector('input[id="metric"]');
const systemImperial = document.querySelector('input[id="imperial"]');
// results - note
const results_note = results.querySelector('.calc--results__note');
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

    resultsOnSystemSelected();

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
    const regexDecimals = /^\d{1,3}(\.\d{1,2})?$/;
    const regexIntegers = /^[1-9][0-9]?[0-9]?$/;
    const regexLetters = RegExp(/[^a-zA-Z]+/g);

    if(!regexLetters.test(Number(value))){
      input.value = '';
      parent.setAttribute('isValid', false);
    }
    if(systemMetric.checked && !regexDecimals.test(Number(value))){
      input.value = '';
      parent.setAttribute('isValid', false);
    }else if(systemImperial.checked && !regexIntegers.test(value)){
      input.value = '';
      parent.setAttribute('isValid', false);
    }else{
      parent.setAttribute('isValid', true);
    }

    // metric values
    const metricHeight = metric_height_input.value;
    const metricWeight = metric_weight_input.value;
    const metricHeightValue = !!Number(metricHeight);
    const metricWeightValue = !!Number(metricWeight); 
    //imperial values
    const imperialHeightFT = imperial_height_ft.value;
    const imperialHeightIN = imperial_height_in.value;
    const imperialWeightST = imperial_weight_st.value;
    const imperialweightLBS = imperial_weight_lbs.value;
    const imperialHeightFTValue = !!Number(imperialHeightFT);
    const imperialHeightINValue = !!Number(imperialHeightIN); 
    const imperialWeightSTValue = !!Number(imperialWeightST);
    const imperialHeightLBSValue = !!Number(imperialweightLBS); 

    if(systemMetric.checked && metricHeightValue && metricWeightValue){
      results_welcome.style.display = 'none';
      results_bmi.style.display = 'flex';
      results_note.style.display = 'flex';

      console.log('height: ', Number(metricHeight))
      console.log('weight: ', Number(metricWeight))
      const ht = Number(metricHeight);
      const wt = Number(metricWeight);
      const results = calculateBmi('metric', wt, ht);
      console.log(results);
      setResults(results);
    }else if(systemImperial.checked && imperialHeightFTValue && imperialHeightINValue && imperialWeightSTValue && imperialHeightLBSValue){
      results_welcome.style.display = 'none';
      results_bmi.style.display = 'flex';
      results_note.style.display = 'flex';

      const ht = Number(imperialHeightFT) * 12 + Number(imperialHeightIN);
      const wt = Number(imperialWeightST) * 14 + Number(imperialweightLBS);
      console.log('height: (inches)', ht)
      console.log('weight (lbs): ', wt)
      const results = calculateBmi('imperial', wt, ht);
      console.log(results);
      setResults(results);
    }else{
      results_welcome.style.display = 'flex';
      results_bmi.style.display = 'none';
      results_note.style.display = 'none';
    }
  });
});

function calculateBmi(system, weight, height){
  let bmi = 0;
  let start = 0;
  let stop = 0;
  
  if(system==='metric'){
    bmi = Math.round(weight / Math.pow((height/100), 2));
    start = Math.round(18.5 * Math.pow((height/100), 2));
    stop = Math.round(25 * Math.pow((height/100), 2));
  }else{
    bmi = Math.round((weight/Math.pow((height),2))*703);
    start = Math.round((18.5 * Math.pow((height/100), 2)) / 703);
    stop = Math.round((25 * Math.pow((height/100), 2)) / 703);
  }

  if(bmi > 0 && bmi < 18.5)
      return {category: 'underweight', bmi: bmi, start: start, stop:stop}
  if(bmi > 18.5 && bmi < 25)
      return {category: 'healthy weight', bmi: bmi, start: start, stop:stop}
  if(bmi > 25 && bmi < 30)
      return {category: 'overweight', bmi: bmi, start: start, stop:stop}
  if(bmi > 30 && bmi < 35)
      return {category: 'class 1 obesity', bmi: bmi, start: start, stop:stop}
  if(bmi > 35 && bmi < 40)
      return {category: 'class 2 obesity', bmi: bmi, start: start, stop:stop}
  if(bmi > 40)
      return {category: 'class 3 obesity', bmi: bmi, start: start, stop:stop}
}

function resultsOnSystemSelected(){
    const metricHeight = metric_height_input.value;
    const metricWeight = metric_weight_input.value;
    const imperialHeightFT = imperial_height_ft.value;
    const imperialHeightIN = imperial_height_in.value;
    const imperialWeightST = imperial_weight_st.value;
    const imperialweightLBS = imperial_weight_lbs.value;

    if(systemMetric.checked && !metricHeight && !metricWeight){
        results_welcome.style.display = 'flex';
        results_bmi.style.display = 'none';
        results_note.style.display = 'none';
    }

    if(systemMetric.checked && !imperialHeightFT && !imperialHeightIN && !imperialWeightST && !imperialweightLBS){
        results_welcome.style.display = 'flex';
        results_bmi.style.display = 'none';
        results_note.style.display = 'none';
    }
}

function setResults(results){
  results_bmi_value.innerHTML = !!results.bmi ? results.bmi : 0;
  results_note_category.innerHTML = results.category;
  results_note_range_from.innerHTML = results.start;
  results_note_range_to.innerHTML = results.stop;
}