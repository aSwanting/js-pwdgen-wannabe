//#### Get user name
//- declare variable 'name'

let firstName

//- get user input for 'name'

firstName = prompt()
console.log('firstName = ' + firstName)

//#### Get user surname
//- declare variable 'surname'

let surName

//- get user input for 'surname'

surName = prompt()
console.log('surName = ' + surName)

//#### Get user favourite colour
//- declare variable 'favColour'

let favColour

//- get user input for 'favColour'

favColour = prompt()
console.log('favColour = ' + favColour)

//#### Output 'name'+'surname'+'favColour'+'21'
//- declare variable 'password' as 'name'+'surname'+'favColour'+'21'

let password = firstName + surName + favColour + 21

//- Print output of 'password' on page

alert('Your new password is = ' + password)
console.log('password = ' + password )

//#### Bonus - Instead of '21' generator random number