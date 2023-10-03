//#### Get user name
//- declare variable 'name'

let firstName

//- get user input for 'name'

function getFirstName() {
    firstName = prompt('Enter your first name')
    console.log('firstName = ' + firstName)
    const firstNameDOM = document.getElementById("firstNameDOM")
    firstNameDOM.innerHTML = firstName
    if (firstName) {
        const firstNameButton = document.getElementById("firstNameButton")
        firstNameButton.classList.remove("border-danger")
    } else {
        const firstNameButton = document.getElementById("firstNameButton")
        firstNameButton.classList.add("border-danger")
    }
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
    if (lastName) {
        const lastNameButton = document.getElementById("lastNameButton")
        lastNameButton.classList.remove("border-danger")
    } else {
        const lastNameButton = document.getElementById("lastNameButton")
        lastNameButton.classList.add("border-danger")
    }
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
    if (favColour) {
        const favColourButton = document.getElementById("favColourButton")
        favColourButton.classList.remove("border-danger")
    } else {
        const favColourButton = document.getElementById("favColourButton")
        favColourButton.classList.add("border-danger")
    }
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
    if (randomNumber) {
        const randomNumberButton = document.getElementById("randomNumberButton")
        randomNumberButton.classList.remove("border-danger")
    } else {
        const randomNumberButton = document.getElementById("randomNumberButton")
        randomNumberButton.classList.add("border-danger")
    }
}

//#### Output 'name'+'lastName'+'favColour'+'randomNumber'
//- declare variable 'password' as 'name'+'lastName'+'favColour'+'randomNumber'

let password

//- Print output of 'password' on page

function generatePassword() {

    if (!firstName) {
        const firstNameButton = document.getElementById("firstNameButton")
        firstNameButton.classList.add("border-danger")
    }

    if (!lastName) {
        const lastNameButton = document.getElementById("lastNameButton")
        lastNameButton.classList.add("border-danger")
    }

    if (!favColour) {
        const favColourButton = document.getElementById("favColourButton")
        favColourButton.classList.add("border-danger")
    }

    if (!randomNumber) {
        const randomNumberButton = document.getElementById("randomNumberButton")
        randomNumberButton.classList.add("border-danger")
    }

    if (firstName && lastName && favColour && randomNumber) {
        password = firstName + lastName + favColour + randomNumber
        console.log('password = ' + password)
        const passwordDOM = document.getElementById("passwordDOM")
        passwordDOM.innerHTML = password
    }

}


