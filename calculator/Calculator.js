
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



//Calculator 

const nine = document.querySelector('.nine');
const eight = document.querySelector('.eight');
const seven = document.querySelector('.seven');
const six = document.querySelector('.six');
const five = document.querySelector('.five');
const four = document.querySelector('.four');
const three = document.querySelector('.three');
const two = document.querySelector('.two');
const one = document.querySelector('.one');
const zero = document.querySelector('.zero');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const subtract = document.querySelector('.subtract');
const add = document.querySelector('.add');
const enter = document.querySelector('.enter');
const clear = document.querySelector('.clear');
const equation = document.querySelector('.equation');


let arr1 = [];


nine.addEventListener('click', function () {
   arr1.push(9);
   console.log(arr1);
   let string1 = arr1.join('')
   equation.innerHTML = string1;
})

eight.addEventListener('click', function () {
    arr1.push(8);
    console.log(arr1);
    let string1 = arr1.join('')
   equation.innerHTML = string1;
})

seven.addEventListener('click', function () {
    arr1.push(7);
    console.log(arr1);
    let string1 = arr1.join('')
   equation.innerHTML = string1;
})

six.addEventListener('click', function () {
    arr1.push(6);
    console.log(arr1);
    let string1 = arr1.join('')
   equation.innerHTML = string1;
})

five.addEventListener('click', function () {
    arr1.push(5);
    console.log(arr1);
    let string1 = arr1.join('')
   equation.innerHTML = string1;
})

four.addEventListener('click', function () {
    arr1.push(4);
    console.log(arr1);
    let string1 = arr1.join('')
   equation.innerHTML = string1;
})

three.addEventListener('click', function () {
    arr1.push(3);
    console.log(arr1);
    let string1 = arr1.join('')
   equation.innerHTML = string1;
})

two.addEventListener('click', function () {
    arr1.push(2);
    console.log(arr1);
    let string1 = arr1.join('')
   equation.innerHTML = string1;
})

one.addEventListener('click', function () {
    arr1.push(1);
    console.log(arr1);
    let string1 = arr1.join('')
    equation.innerHTML = string1;
})

zero.addEventListener('click', function () {
    arr1.push(0);
    console.log(arr1);
    let string1 = arr1.join('')
   equation.innerHTML = string1;
})

divide.addEventListener('click', function () {
    arr1.push('/');
    console.log(arr1);
    let string1 = arr1.join('')
   equation.innerHTML = string1;
})

multiply.addEventListener('click', function () {
    arr1.push('*');
    console.log(arr1);
    let string1 = arr1.join('')
   equation.innerHTML = string1;
})

subtract.addEventListener('click', function () {
    arr1.push('-');
    console.log(arr1);
    let string1 = arr1.join('')
   equation.innerHTML = string1;
})

add.addEventListener('click', function () {
    arr1.push('+');
    console.log(arr1);
    let string1 = arr1.join('')
   equation.innerHTML = string1;
})

enter.addEventListener('click', function () {
   console.log(eval(arr1.join('')));
   let string2 = eval(arr1.join(''));
    equation.innerHTML = string2;
   arr1 = [string2];
})

clear.addEventListener('click', function () {
    arr1 = [];
    equation.innerHTML = 0;
    console.log(0);
})

