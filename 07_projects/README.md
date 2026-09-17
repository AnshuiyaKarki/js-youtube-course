## Solution code 

## project 1 - Background Color Switcher
 
 ```javascript
 console.log('Anshuiya')
 const buttons=document.querySelectorAll('.button')
const body=document.querySelector("body")

buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e.target.id)
        switch(e.target.id){
            case "grey":
                body.style.backgroundColor=e.target.id
                break;
            case "white":
                body.style.backgroundColor=e.target.id
                break;
            case "blue":
                body.style.backgroundColor=e.target.id
                break;
            case "yellow":
                body.style.backgroundColor=e.target.id
                break;
        }

    })
    
}) 
```




## project 2 - BMI Calculator 

```javascript 

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
```
## project 3 - Digital Clock

```javascript 
const clock=document.getElementById("clock")
// const clock=document.querySelector("clock")

setInterval(()=>{
    let date=new Date()
    //console.log(date.toLocaleTimeString())
    clock.innerHTML=date.toLocaleTimeString()

},1000)

```



