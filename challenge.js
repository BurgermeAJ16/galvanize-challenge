// an array to hold my name and favorite color
let myArray = []

// fill my array with name and color
myArray[0] = "Amber Jean Burgermeister"
myArray[1] = "green"

// a function intended to split a name by spaces
function cutName (name){
	return name.split(" ")
}

// an empty object to store my info
let myInfo = {}

// assign key-value pairs to properties
myInfo.fullName = cutName(myArray[0])
myInfo.favoriteColor = myArray[1]
myInfo.github = "BurgermeAJ16"
