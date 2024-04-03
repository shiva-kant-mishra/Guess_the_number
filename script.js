'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1
let score = 20
let highScore = 0
document.querySelector(".check").addEventListener('click',function() {
    const guess = Number (document.querySelector(".guess").value)
    
    if(!guess){
        displayMessage('⛔ No number!')
    }else if(score < 1){
        displayMessage('🎃 Game Over!')
        document.querySelector('body').style.backgroundColor = '#7B0323'
    }else if (guess===secretNumber){
        displayMessage('🎉 Congrats! You guessed it right!')
        changeScore(score)
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber
        if(score > highScore){
            highScore = score
        }
        document.querySelector('.highscore').textContent = highScore
    }else {
        displayMessage( (guess < secretNumber) ? '👆 try a higher number!':'👇 try a lower number!')
        score--
        changeScore(score)
    }
})

document.querySelector('.again').addEventListener('click', function(){
    secretNumber = Math.trunc(Math.random()*20)+1
    score = 20
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
    displayMessage('👍 Start guessing!')

})

function displayMessage(message){
    document.querySelector('.message').textContent = message
}
function changeScore(score){
    document.querySelector('.score').textContent = score
}