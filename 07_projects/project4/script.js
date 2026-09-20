let randomNumber=parseInt(Math.random()*100+1)

const submit=document.querySelector("#subt")
const userInput=document.querySelector('#guessField')
const prevGuessList=document.querySelector('.guesses')
let prevGuess=[]
const remainingGuessCount=document.querySelector(".lastResult")
let remainingGuess=10
const msg=document.querySelector('.lowOrHi')
const form=document.querySelector(".form")
const wrapper=document.querySelector("#wrapper")
let restartButton=document.createElement("button");



form.addEventListener("submit",(e)=>{
        e.preventDefault()
        let guess=parseInt(userInput.value)
        if (checkGuessValid(guess)){
            if (checkGuessRange(guess)==false){
                prevGuess.push(guess)
                prevGuessList.innerHTML=prevGuess;

                remainingGuess--;
                if (remainingGuess==0) {
                    displaymsg(`GAME OVER! The random number was ${randomNumber}`)
                    endGame()
                    restartButton.innerHTML="Restart Game"
                }
                remainingGuessCount.innerHTML=remainingGuess
                userInput.value=""
            }else{
                
            }
        }
})


function checkGuessValid(guess) {
    if (isNaN(guess)) {
        return false
    } else {
        return true;
    }
}

function checkGuessRange(guess) {
    if (guess==randomNumber){
        displaymsg("YOU WON!")
        endGame()
        restartButton.innerHTML="Restart Game"
        return true;
    }else {
        if (guess>randomNumber){
            displaymsg('Too high')
        }else{
            displaymsg('Too low')
        }
        return false
    }
}

function displaymsg(message) {
    msg.innerHTML=message
}

function endGame(){
    submit.disabled=true
    userInput.disabled=true

    wrapper.appendChild(restartButton);
}


restartButton.addEventListener("click",()=>{
    randomNumber=parseInt(Math.random()*100+1);
    remainingGuess=10
    prevGuess=[]

    prevGuessList.innerHTML=""
    remainingGuessCount.innerHTML=remainingGuess
    msg.innerHTML=""
    submit.disabled=false
    userInput.disabled=false
    restartButton.remove()


});