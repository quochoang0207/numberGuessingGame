let history= []

function guessNumber(){
    let remaining = 4 - history.length
    if(remaining == 0){
        resetGame()
        document.getElementById('guessesRemaining').innerHTML='You Lose'
        return
    }    

    let userNumber = document.getElementById('userGuess').value
    if(userNumber > randomNumber){
        document.getElementById('resultArea').innerHTML='Too High'
    }else if(userNumber < randomNumber){
        document.getElementById('resultArea').innerHTML='Too Low'
    }else if(userNumber == randomNumber){
        document.getElementById('resultArea').innerHTML='Ta La !'
    }
    
    history.push(userNumber)
    console.log(history)
    document.getElementById('historyArea').innerHTML = `${history}`
    document.getElementById('guessesRemaining').innerHTML=`${remaining} Remaining`
   
}

function resetGame(){
    remaining = 5
    history=[]
    document.getElementById('guessesRemaining').innerHTML=''
    document.getElementById('userGuess').value=''
    document.getElementById('resultArea').innerHTML=''
    document.getElementById('historyArea').innerHTML=''
}


let randomNumber = Math.floor(Math.random()*100)+1
console.log(randomNumber)






