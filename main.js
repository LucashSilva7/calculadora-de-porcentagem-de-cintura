const buttonA =  document.getElementById('button');

let waistValue = document.getElementById('number-input-waist');
let hipValue = document.getElementById('number-input-hip');

let result = document.getElementById('result');


function calc () {
    
    let waist = parseInt(waistValue.value) * 100;
    let hip = parseInt(hipValue.value);
    let resultCalc = waist / hip;
    
    console.log('hip', hip);
    console.log(waist);
    console.log(resultCalc);
    console.log(result);

    if (resultCalc) {
        result.textContent =  parseInt(resultCalc);
    }

    else if ( isNaN(resultCalc)) {
        result.textContent = '0'
    }
    
}

waistValue.addEventListener('keyup', calc);
hipValue.addEventListener('keyup', calc);
// buttonA.addEventListener('click', calc);