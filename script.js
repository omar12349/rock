function getComputerChoice(){
    let ary = ['ROCK','PAPER','SCISSORS'];
    let comp_choice = ary[Math.floor(Math.random()*ary.length)];
    return comp_choice;
}
function playRound(){
    let playerSelection = prompt("Rock,Paper or Scissors?")
    let choice = getComputerChoice()
    if (playerSelection.toUpperCase() == choice){
        let winner = "It's a tie"
        return winner;
    } else if (playerSelection.toUpperCase() == 'ROCK' && choice == 'PAPER'){
        let winner = 'Paper beats Rock! You lose'
        return winner;
    } else if (playerSelection.toUpperCase() == 'ROCK' && choice == 'SCISSORS'){
        let winner = 'Rock beats Scissors! You win'
        return winner;
    } else if (playerSelection.toUpperCase() == 'PAPER' && choice == 'ROCK'){
        let winner = 'Paper beats Rock! You win'
        return winner;
    } else if (playerSelection.toUpperCase() == 'PAPER' && choice == 'SCISSORS'){
        let winner = 'Scissors beats Paper! You lose'
        return winner;
    } else if (playerSelection.toUpperCase() == 'SCISSORS' && choice == 'ROCK'){
        let winner = 'Rock beats Scissors! You lose'
        return winner;
    } else if (playerSelection.toUpperCase() == 'SCISSORS' && choice == 'PAPER'){
        let winner = 'Scissors beats Paper! You win'
        return winner;
        
    }
}

//console.log(round.includes('win'))
function playGame(){
    let win = 0;
    let lose = 0;
    for (let i = 0; i < 5; i++){
        let round = playRound()
        console.log(round)
        if (round.includes('win')){
            win++;
        }
        if (round.includes('lose')){
            lose++
        }
    }
    if (win > lose){
        console.log('You are the winner!')
    } else if (lose > win){
        console.log('Computer won loser!')
    } else {
        console.log("It's a tie")
    }
}
playGame()
