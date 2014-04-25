//Adam Nelson Scalable Data Infrastructures 4/24/2014
//declaring variables
var gameYourPlaying = "World of Warcraft";
var races = 14;
var classes = 11;
var yourRace = "Human";
var yourClassIsHunter = true;
var maleOrFemale = "Male";
//output
console.log("You are playing" + gameYourPlaying);
console.log("You will be a"+ yourRace);
console.log("I hear that there are" + races + "races in the game and" + classes + "to choose from.");
console.log("So you are going to play a Hunter, Right?");
//return boolean
function Checksex(maleOrFemale){
if(maleOrFemale=="Male"){
	return true;
}else{
	return false;
}
}
