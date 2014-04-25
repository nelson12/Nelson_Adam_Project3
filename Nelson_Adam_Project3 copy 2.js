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
function checkSex(maleOrFemale){
if(maleOrFemale=="Male"){
	return true;
}else{
	return false;
}
};
checkSex();
//while loop
var a = 10
while(a>0){
	console.log(a + "pets able to be called.");a--;
}
//for loop
for (var i = 30; i>0; i--);{
	console.log(i + "pets in the Stable.");
}
//array return
var petNames= ["Snow", "Shadow", "Flake", "Pistol", "Punch"];
consle.log("My pets are" + petNames);
//array method
petNames.push("Bunker");
//array property
petNames.length;
console.log("Now I have" + petNames.length + "now.");
//nesting conditional
var heirloomGear = 6
if(heirloomGear<5){
	console.log("start leveling");
if(heirloomGear>5){
	console.log("time to power house it");}
}else{
	console.log("get your character some heirloom gear.");
}
//number return
function calcPetsWithStampede(numberOfPets, petsOut){
	var petsWithStampede = numberOfPets*petsOut;
	return petsWithStampede;
} 
calcPetsWithStampede(5,1);
console.log(petsWithStampede);


