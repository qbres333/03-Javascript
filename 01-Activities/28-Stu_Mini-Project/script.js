
// all possible choices for the game
const choices = ["r","p","s"];
//create object that tracks wins and losses

function startGame() {

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
        if(userChoice == computer) {
            alert(`It's a tie! No one wins.`);
            confirm(`Would you like to play again?`);
        } 
        // R beats S
        // P beats R
        // S beats P
        else if( (userChoice.toLowerCase == "r" && computer == "s") || (userChoice.toLowerCase == "p" && computer == "r") || (userChoice.toLowerCase == "s" && computer == "p")) {
            alert(`You beat the computer!`);
            confirm(`Would you like to play again?`);
            if('OK') {
                userChoice;
            } else {
                alert(`Thank you for playing 😉`);
            }
        }
        else {
            alert(`The computer wins!`);
            confirm(`Would you like to play again?`);
            if('OK') {
                userChoice;
            } else {
                alert(`Thank you for playing 😉`);
            }
        }
            
    } else {
        alert(`You made a boo boo. Please try again.`);
        location.reload();
    }

}

startGame();