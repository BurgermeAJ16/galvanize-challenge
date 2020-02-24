// an array to hold my name and favorite color
let myArray = []

// fill my array with name and color
myArray[0] = "Amber Jean Burgermeister"
myArray[1] = "green"

//
function cutName (name){
	return name.split(" ")
}

let myInfo = {}

myInfo.fullName = cutName(myArray[0])
