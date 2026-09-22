//generate random color 

const randomColor=function(){
    const hex="0123456789ABCDEF"
    let color="#";
    for (let i = 0; i < 6; i++) {
        let randomIndex=Math.floor(Math.random()*16)
        color +=hex[randomIndex];
    }
    return color;
}
console.log(randomColor())


function changeBackgroundColor(){
    document.body.style.backgroundColor=randomColor();

}

let intervalId
function startBackgroundColor(){
    intervalId=setInterval(changeBackgroundColor,1000);
}

function stopBackgroundColor(){
    clearInterval(intervalId);
    intervalId=null;
}


const startButton=document.querySelector("#start")
const stopButton=document.querySelector("#stop")

startButton.addEventListener("click",startBackgroundColor)
stopButton.addEventListener("click",stopBackgroundColor)