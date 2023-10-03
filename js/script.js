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

//#### Output 'name'+'lastName'+'favColour'+'21'
//- declare variable 'password' as 'name'+'lastName'+'favColour'+'21'

let password = firstName + lastName + favColour + 21

//- Print output of 'password' on page

alert('Your new password is = ' + password)
console.log('password = ' + password )

//#### Bonus - Instead of '21' generator random number

