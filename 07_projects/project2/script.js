const form=document.querySelector('form')

form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')
    let passed=false
    let bmi=0;
    if (height === ''|| height<0 || isNaN(height)){
        results.innerHTML='Please give a valid height';
        passed=false;
    }else if (weight === ''|| weight<0 || isNaN(weight)){
        results.innerHTML='Please give a valid weight';
        passed=false

    }else{
        bmi=(weight/((height*height)/10000)).toFixed(2)
        //show result 
        results.innerHTML=`<span>${bmi}</span>`
        passed=true
    }

    if (passed){
        if (bmi<18.6){
            results.innerHTML=`${bmi} Under Weight`
        }else if (bmi>=18.6 && bmi<=24.9){
            results.innerHTML=`${bmi} Normal Range`
        }else{
            results.innerHTML=`${bmi} Overweight`
        }
    }


   
    


})