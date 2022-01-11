
//create a function to play a 5 rounds of game rock paper sissors
    //create a varible to keep track of game count

function game() {
    let roundNumber = 0;
    let computerScore = 0;
    let humanScore = 0;
    let tieCount = 0;

    for (let totalNumberRounds=1; totalNumberRounds<=5; totalNumberRounds++) {
//create a function for the computer to pick RPS
    //create a varible to store computer choice
    //create an array with 3 possible choices
    //have something randomly select one of the 3 array choices
    //store the choice as the computer answer

function computerPlay (){
    let computerSelection;
    const gameChoicesArray = ["rock","paper","sissors"]; 
    computerSelection = gameChoicesArray[Math.floor(Math.random()*gameChoicesArray.length)];
    return computerSelection
}

//create a function to play a single round of the game
    //go get the selection the computer made 
    //create a place to store the human players choice
    //change the human players choice into a string of all lowercase letters with no spaces
    //limit player choice to rock, paper, or  sissors
    //define winning a round
    //compare the human choice to the computer coice and pick a winner for the round
    //store the result of this round

function oneRoundRockPaperSissors (playerSelection,computerSelection) {
    computerSelection= computerPlay ();
    console.log("The computer selection was: "+computerSelection);
    let roundResult
   
    playerSelection = playerSelection.replace(/\s+/g, '');
    let playerSelectionLowerCase = playerSelection.toLowerCase();
    
    if (playerSelectionLowerCase!=="rock"&&playerSelectionLowerCase!=="paper"&&playerSelectionLowerCase!=="sissors") {
        let badHumandPlayerSelectionMessage = "You lose. You must choose rock, paper or sissors in order to have a chance at winning this game.";
        console.log ("Your selection was: "+playerSelectionLowerCase+"???")
        console.log (badHumandPlayerSelectionMessage);
        roundResult = "computerWin"}

    else if (computerSelection==playerSelectionLowerCase) {  
        console.log ("Your selection was: "+playerSelectionLowerCase);
        console.log ("It's a tie!")
        roundResult = "tiedGame"}

    else if (computerSelection=="rock"&&playerSelectionLowerCase=="paper") {
        console.log ("Your selection was: "+playerSelectionLowerCase);
        console.log ("You win, paper beats rock.")
        roundResult = "humanWin"}

    else if (computerSelection=="rock"&&playerSelectionLowerCase=="sissors") {
        console.log ("Your selection was: "+playerSelectionLowerCase);
        console.log ("You lose, rock beats sissors.")
        roundResult = "computerWin"}

    else if (computerSelection=="paper"&&playerSelectionLowerCase=="sissors") {
        console.log ("Your selection was: "+playerSelectionLowerCase);
        console.log ("You win, sissors beat paper.")
        roundResult = "humanWin"}

    else if (computerSelection=="paper"&&playerSelectionLowerCase=="rock") {
        console.log ("Your selection was: "+playerSelectionLowerCase);
        console.log ("You lose, paper beats rock.")
        roundResult = "computerWin"}

    else if (computerSelection=="sissors"&&playerSelectionLowerCase=="paper") {
        console.log ("Your selection was: "+playerSelectionLowerCase);
        console.log ("You lose, sissors beat paper.")
        roundResult = "computerWin"}

    else {
        console.log ("Your selection was: "+playerSelectionLowerCase);
        console.log ("You win, rock beats sissors.");
        roundResult = "humanWin"}

//create a function to log and total round number and score

        function scoreTotalUp () {
        roundNumber++; //increments round

        if (roundResult == "tiedGame"){
            tieCount++;} // increments tied game count

        else if(roundResult == "computerWin"){
            computerScore++;} //increments score

        else if (roundResult== "humanWin") 
            humanScore++;} //increments score
            //this is the end of the scoreTotal up function
        
        scoreTotalUp ()
        console.log ("Round "+roundNumber+" results are as follows, the computer has "+computerScore+" points, the human has "+humanScore+ " points, and there have been "+tieCount+" ties.")
        
        }//this is the end the function oneRoundRPS

let promtForHumanPlayerChoice = prompt ("Want to play a game? Type rock, paper, or sissors. Best of five wins!")
oneRoundRockPaperSissors(promtForHumanPlayerChoice)

} // this is the end of the for loop

} //this is the end of the game function script

game ()





