function getChoice(){
    return Math.random();
}

function getComputerChoice(){
    let choice = getChoice();
    let computerChoice;
    if (choice >= 0.3 && choice <= 0.6)
        computerChoice = "rock";
    else if(choice >= 0.6)
        computerChoice = "paper";
    else
        computerChoice = "scissors"
    return computerChoice;

}

function getHumanChoice(){
    let humanInput = prompt("Please provide your input");
    return humanInput;

}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    let result;
    if (humanChoice === "rock" && computerChoice === "scissors") 
        result = 1;
    else if(humanChoice === "scissors" && computerChoice === "paper")
        result = 1;

    else if (humanChoice === "paper" && computerChoice === "rock")
        result = 1;

    else if(humanChoice === computerChoice)
        result = 1;
    
    else
        result = 0;
    
    return result;
}


function playGame(){
    let humanScore = 0;

    let computerScore = 0;

    let rounds = 5;

    while(rounds != 0){

        const humanSelection = getHumanChoice();

        const computerSelection = getComputerChoice();

        let result = playRound(humanSelection, computerSelection)

        if (result === 1) {
            console.log("You win! " + humanSelection + " beats " + computerSelection)
        
            humanScore++
        }
        else{
            console.log("You lose! " + computerSelection + " beats " + humanSelection)
        
            computerScore++;
        }
        rounds--;
    }
    console.log(humanScore + " - " + computerScore)
}

playGame()