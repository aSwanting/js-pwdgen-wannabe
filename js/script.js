//#### Get user name
//- declare variable 'name'

let firstName

//- get user input for 'name'

firstName = prompt('Enter your first name')
console.log('firstName = ' + firstName)

//#### Get user lastName
//- declare variable 'lastName'

let lastName

//- get user input for 'lastName'

lastName = prompt('Enter your last name')
console.log('lastName = ' + lastName)

//#### Get user favourite colour
//- declare variable 'favColour'

let favColour

//- get user input for 'favColour'

favColour = prompt('Enter your favourite colour')
console.log('favColour = ' + favColour)

// - Generate random number between 1 and 21

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

// - Assign random number to variable 'randomNumber'

let randomNumber = getRandomIntInclusive(1, 21)
console.log('radomNumber = ' + randomNumber)

//#### Output 'name'+'lastName'+'favColour'+'randomNumber'
//- declare variable 'password' as 'name'+'lastName'+'favColour'+'randomNumber'

let password = firstName + lastName + favColour + randomNumber

//- Print output of 'password' on page

alert('Your new password is = ' + password)
console.log('password = ' + password)

