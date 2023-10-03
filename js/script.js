//#### Get user name
//- declare variable 'name'

let firstName

//- get user input for 'name'

function getFirstName() {
    firstName = prompt('Enter your first name')
    console.log('firstName = ' + firstName)
    const firstNameDOM = document.getElementById("firstNameDOM")
    firstNameDOM.innerHTML = firstName
}

//#### Get user lastName
//- declare variable 'lastName'

let lastName

//- get user input for 'lastName'

function getLastName() {
    lastName = prompt('Enter your last name')
    console.log('lastName = ' + lastName)
    const lastNameDOM = document.getElementById("lastNameDOM")
    lastNameDOM.innerHTML = lastName
}

//#### Get user favourite colour
//- declare variable 'favColour'

let favColour

//- get user input for 'favColour'

function getFavColour() {
    favColour = prompt('Enter your favourite colour')
    console.log('favColour = ' + favColour)
    const favColourDOM = document.getElementById("favColourDOM")
    favColourDOM.innerHTML = favColour
}

// - Generate random number between 1 and 21

function genRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// - Assign random number to variable 'randomNumber'

let randomNumber

function getRandomNumber() {
    randomNumber = genRandomIntInclusive(1, 21)
    console.log('radomNumber = ' + randomNumber)
    const randomNumberDOM = document.getElementById("randomNumberDOM")
    randomNumberDOM.innerHTML = randomNumber
}


//#### Output 'name'+'lastName'+'favColour'+'randomNumber'
//- declare variable 'password' as 'name'+'lastName'+'favColour'+'randomNumber'

let password

//- Print output of 'password' on page

function generatePassword() {
    password = firstName + lastName + favColour + randomNumber
    /* alert('Your new password is = ' + password) */
    console.log('password = ' + password)
    const passwordDOM = document.getElementById("passwordDOM")
    passwordDOM.innerHTML = password
}


