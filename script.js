const words = ['actor', 'black','carry','date','easy','farm','give','head',
    'idea','january','kitchen','learn','market','negative','object','paper',
    'question','radio','sandwich','teacher','uncle','video','walk','young',
    'zero','age','battle','centre','damage','episode','face','ghost','hunt',
    'journey','ignore','key','level','magic','next','original','payment','quit',
    'reality','security','talent','ugly','value','water','yet','zone'];


let typing = document.querySelector(".typing");
let oldText = document.querySelector(".oldText");
let timerCounter = document.querySelector("#timer");
let wordsCounter = document.querySelector("#words");
let charactersCounter = document.querySelector("#characters");
let mistakesCounter = document.querySelector("#mistakes");

window.onload = () => {
    for(var i=0; i<5; i++)
        addWord();
}

function addWord() {
    var span = document.createElement("span");
    var word = words[Math.floor(Math.random() * words.length)];
    span.textContent = word + " ";
    typing.appendChild(span);
}


var word;
document.addEventListener("keypress", e => {
    var char = typing.firstElementChild.textContent[0];
    
    if(timerCounter.textContent == '0') {
        typing.style.color = "#600d0d";
        oldText.style.color = "#600d0d";
    }
    else {
        if(timerCounter.textContent == '60')
            startTimer();
        if(e.key == char) {
            if(char == " ") {
                wordsCounter.textContent = parseInt(wordsCounter.textContent) + 1;
                typing.removeChild(typing.firstElementChild);
                index = 0;
                addWord();
            }
            else {
                charactersCounter.textContent = parseInt(charactersCounter.textContent) + 1;
                word = typing.firstElementChild.textContent;
                typing.firstElementChild.textContent = "";
                for(var i=1; i<word.length; i++)
                    typing.firstElementChild.textContent += word[i];
            }
            oldText.textContent += e.key;
            if(oldText.textContent.length > 10) {
                word = oldText.textContent;
                oldText.textContent = "";
                for(var i=1; i<word.length; i++)
                    oldText.textContent += word[i];
            }        
        }
        else
            mistakesCounter.textContent = parseInt(mistakesCounter.textContent) + 1;
    }
});


function startTimer() {
    var time = 60;

    let timer = setInterval(() => {
        time--;
        timerCounter.textContent = time;
    }, 1000);

    setTimeout(() => {
        clearInterval(timer);
        timerCounter.textContent = "0";
    }, 1000 * time);    
}