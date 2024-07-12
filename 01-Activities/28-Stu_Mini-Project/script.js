
// all possible choices for the game
const choices = ["r","p","s"];


function startGame {

//shows a window with the welcome message
window.alert(`Welcome to Rock, Paper, Scissors!`)

// there are 2 users, player and computer
// player inputs their choice
const userChoice = prompt('Choose between rock (R, r), paper (P, p) or scissors (S, s)');
//store valid user choice
const userValid = choices.includes(userChoice.toLowerCase());
//if the choice is invalid, prompt for a new input

if(userValid) {    //returns true or false
    // if true, computer picks a random element of the array
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computer = choices[randomIndex];
    
// how do we know who wins?

} else {
    alert(`You made a boo boo. Please try again.`)
    location.reload();
}


}

startGame();