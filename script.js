function getComputerChoice(){
    let ary = ['ROCK','PAPER','SCISSORS'];
    let comp_choice = ary[Math.floor(Math.random()*ary.length)];
    return comp_choice;
}
const buttonRock = document.querySelector('#rock')
const buttonPaper = document.querySelector('#paper')
const buttonScissors = document.querySelector('#scissors')
let score = document.querySelector('#score')
let finalScore = document.querySelector('#finalscore')


function playRound(){
    let choice = getComputerChoice()
    console.log(choice)
    if (playerSelection.toUpperCase() == choice){
        console.log(playerSelection)
        let winner = "It's a tie"
        return winner;
    } else if (playerSelection.toUpperCase() == 'ROCK' && choice == 'PAPER'){
        console.log(playerSelection)
        let winner = 'Paper beats Rock! You lose'
        return winner;
    } else if (playerSelection.toUpperCase() == 'ROCK' && choice == 'SCISSORS'){
        console.log(playerSelection)
        let winner = 'Rock beats Scissors! You win'
        return winner;
    } else if (playerSelection.toUpperCase() == 'PAPER' && choice == 'ROCK'){
        console.log(playerSelection)
        let winner = 'Paper beats Rock! You win'
        return winner;
    } else if (playerSelection.toUpperCase() == 'PAPER' && choice == 'SCISSORS'){
        console.log(playerSelection)
        let winner = 'Scissors beats Paper! You lose'
        return winner;
    } else if (playerSelection.toUpperCase() == 'SCISSORS' && choice == 'ROCK'){
        console.log(playerSelection)
        let winner = 'Rock beats Scissors! You lose'
        return winner;
    } else if (playerSelection.toUpperCase() == 'SCISSORS' && choice == 'PAPER'){
        console.log(playerSelection)
        let winner = 'Scissors beats Paper! You win'
        return winner;
        
    }
}
round = ''
let playerSelection = ''
let win = 0;
let lose = 0;
let sum = 0;
buttonRock.addEventListener('click',()=>{
    playerSelection = 'ROCK'
    round = playRound()
    if(playGame()==true){
        win++
        sum++
    } else if (playGame()==false){
        sum++
        lose++
    } else if (playGame() == 'tie'){
        sum++
    }
    score.innerHTML = 'human: ' + win + 'vs computer: ' +lose
    if (sum == 5){
        if (win > lose){
            finalScore.innerHTML = 'You are the WINNNER!'
        } else if (win < lose){
            finalScore.innerHTML = 'You lost to a computer????LOSER'
        } else {
            finalScore.innerHTML = "It's a tie"
        }
    }
})
buttonPaper.addEventListener('click',()=>{
    playerSelection = 'PAPER'
    round = playRound()
    if(playGame()==true){
        win++
        sum++
    } else if (playGame()==false){
        sum++
        lose++
    } else if (playGame() == 'tie'){
        sum++
    }
    score.innerHTML = 'human: ' + win + 'vs computer: ' +lose
    if (sum == 5){
        if (win > lose){
            finalScore.innerHTML = 'You are the WINNNER!'
        } else if (win < lose){
            finalScore.innerHTML = 'You lost to a computer????LOSER'
        } else {
            finalScore.innerHTML = "It's a tie"
        }
    }
    
    
})
buttonScissors.addEventListener('click',()=>{
    playerSelection = 'SCISSORS'
    round = playRound()
    if(playGame()==true){
        win++
        sum++
    } else if (playGame()==false){
        sum++
        lose++
    } else if (playGame() == 'tie'){
        sum++
    }
    score.innerHTML = 'human: ' + win + 'vs computer: ' +lose
    if (sum == 5){
        if (win > lose){
            finalScore.innerHTML = 'You are the WINNNER!'
        } else if (win < lose){
            finalScore.innerHTML = 'You lost to a computer????LOSER'
        } else {
            finalScore.innerHTML = "It's a tie"
        }
    }
    
})
if (win > 2 || lose > 2){
    console.log('winner')
}

//console.log(round.includes('win'))
function playGame(){
   
        if (round.includes('win')){
            return true
        }
        if (round.includes('lose')){
            return false
        } else if (round.includes('tie')){
            return 'tie'
        }
}
