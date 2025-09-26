let generateColor = document.getElementById("color-rgb");
let options = document.querySelector(".options");

let score = document.getElementById("score");
let cnt=0;

function generateRgbColor(){
    let red = Math.round( Math.random()*255);
    let green = Math.round( Math.random()*255);
    let blue = Math.round( Math.random()*255);

    let rgbColor = `rgb(${red}, ${green}, ${blue})`;

    return rgbColor;
}



function checkResult(optionEl,color){    
    optionEl.addEventListener('click',()=>{
        if(optionEl.style.backgroundColor === color)
        {
            optionEl.innerText = '✔';
            optionEl.classList.add("answerCorrect");
    
            cnt++;
            localStorage.setItem("score",cnt.toString());
        }
        else{
            optionEl.innerText = '❌';
            optionEl.classList.add("answerWrong");
            cnt=0;
        }

        setTimeout(gameStart,1000);
    })
}


function gameStart(){
    options.innerHTML=null;
    
    score.innerText =Number(localStorage.getItem("score")) ?? 0;

    let color = generateRgbColor();
    generateColor.innerText=color;

    let ansIndex = Math.round(Math.random()*6);
    
    for(let i=1;i<=6;i++){
        let optionEl = document.createElement("span");
        options.append(optionEl);
        optionEl.classList.add("option");

        optionEl.style.backgroundColor = i === ansIndex ? color : generateRgbColor();

        checkResult(optionEl,color);
    }

}

window.addEventListener('load',()=>{ 
    gameStart();
});