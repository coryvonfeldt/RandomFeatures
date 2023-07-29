
// Nav Buttons
const signUp = document.querySelector('.signUp');
const signIn = document.querySelector('.signIn');


// Sign Up and Log In Forms
const signUpContainer = document.querySelector('.signUpContainer');
const logInContainer = document.querySelector('.signInContainer');
const closeSignUpForm = document.querySelector('.closeSignUpForm');
const closeLogInForm = document.querySelector('.closeLogInForm');


// Show Sign Up Form
signUp.addEventListener('click', function () {
    signUpContainer.style.display = 'block';
    logInContainer.style.display = 'none';
})


// Close Sign Up Form
closeSignUpForm.addEventListener('click', function () {
    signUpContainer.style.display = 'none'
})


// Show Log In Form
signIn.addEventListener('click', function () {
    logInContainer.style.display = 'block';
    signUpContainer.style.display = 'none'
})

// Close Log In Form
closeLogInForm.addEventListener('click', function () {
    logInContainer.style.display = 'none';
})


// Talk To User

const nameInput = document.querySelector('.nameInput');
const greet = document.querySelector('.greet');

nameInput.addEventListener('keypress', function (e) {
    if (e.which === 13 && e.target.value.length > 0) {
        greet.innerHTML = `Hello ${e.target.value}!`
    }
})


// Rock Paper Scissors game

const gameInput = document.querySelector('.gameInput');
const result = document.querySelector('.result');


gameInput.addEventListener('keypress', function (e) {
    if (e.which === 13) {
        let choice = e.target.value;
        let userChoice = choice.toLowerCase();
        result.innerHTML = playGame(userChoice);
    }
})


function getComputerChoice () {
    let num = Math.floor(Math.random() * 3);
    switch (num) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';      
    }
}

function decideOutcome (computerChoice, userChoice) {
    if (userChoice === computerChoice) {
        return `You threw ${userChoice}, I threw ${computerChoice}. It's a tie!`
    } else if (userChoice === 'rock' && computerChoice === 'paper') {
        return `You threw rock. I threw paper. I win!`
    } else if (userChoice === 'rock' && computerChoice === 'scissors') {
        return `You threw rock. I threw scissors. You win!`
    } else if (userChoice === 'paper' && computerChoice === 'rock') {
        return `You threw paper. I threw rock. You win!`
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        return `You threw paper. I threw scissors. I win!`
    } else if (userChoice === 'scissors' && computerChoice === 'rock') {
        return `You threw scissors. I threw rock. I win!`
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        return `You threw scissors. I threw paper. You win!`
    } else if (userChoice !== 'rock' && userChoice !== 'paper' && userChoice !== 'scissors') {
        return "I'm sorry. Your choice was invalid. Please choose rock, paper, or scissors."
    }
}

function playGame (user) {
    let computer = getComputerChoice();
    let outcome = decideOutcome(computer, user);
    return outcome;
}




























