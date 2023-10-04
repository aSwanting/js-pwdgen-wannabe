
// get user input for 'firstName'

function getFirstName() {
    const firstName = prompt('Enter your first name')
    document.getElementById("firstNameDOM").innerHTML = firstName
}

// check the value of 'firstName'

function checkFirstName() {
    if (document.getElementById("firstNameDOM").innerHTML) {
        document.getElementById("firstNameButton").classList.remove("border-danger")
        return (document.getElementById("firstNameDOM").innerHTML)
    } else {
        document.getElementById("firstNameButton").classList.add("border-danger")
    }
}

// get user input for 'lastName'

function getLastName() {
    const lastName = prompt('Enter your last name')
    document.getElementById("lastNameDOM").innerHTML = lastName
}

// check the value of 'lastName'

function checkLastName() {
    if (document.getElementById("lastNameDOM").innerHTML) {
        document.getElementById("lastNameButton").classList.remove("border-danger")
        return (document.getElementById("lastNameDOM").innerHTML)
    } else {
        document.getElementById("lastNameButton").classList.add("border-danger")
    }
}

// get user input for 'favColour'

function getFavColour() {
    const favColour = prompt('Enter your favourite colour')
    document.getElementById("favColourDOM").innerHTML = favColour
}

// check the value of 'favColour'

function checkFavColour() {
    if (document.getElementById("favColourDOM").innerHTML) {
        document.getElementById("favColourButton").classList.remove("border-danger")
        return (document.getElementById("favColourDOM").innerHTML)
    } else {
        document.getElementById("favColourButton").classList.add("border-danger")
    }
}

// generate random number between 1 and 21

function genRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function getRandomNumber() {
    document.getElementById("randomNumberDOM").innerHTML = genRandomIntInclusive(1, 21)
}

// check the value of 'randomNumber'

function checkRandomNumber() {
    if (document.getElementById("randomNumberDOM").innerHTML) {
        document.getElementById("randomNumberButton").classList.remove("border-danger")
        return (document.getElementById("randomNumberDOM").innerHTML)
    } else {
        document.getElementById("randomNumberButton").classList.add("border-danger")
    }
}

// check that all fields have been completed

function generatePassword() {

    if (!checkFirstName()) {
        document.getElementById("firstNameButton").classList.add("border-danger")
    }

    if (!checkLastName()) {
        document.getElementById("lastNameButton").classList.add("border-danger")
    }

    if (!checkFavColour()) {
        document.getElementById("favColourButton").classList.add("border-danger")
    }

    if (!checkRandomNumber()) {
        document.getElementById("randomNumberButton").classList.add("border-danger")
    }

    if (checkFirstName() && checkLastName() && checkFavColour() && checkRandomNumber()) {
        password = checkFirstName() + checkLastName() + checkFavColour() + checkRandomNumber()
        document.getElementById("passwordDOM").classList.remove("text-danger")
        document.getElementById("passwordDOM").innerHTML = password
    }

    else {        
        document.getElementById("passwordDOM").classList.add("text-danger")
        document.getElementById("passwordDOM").innerHTML = "(╯°□°)╯︵ ┻━┻"
    }

}


