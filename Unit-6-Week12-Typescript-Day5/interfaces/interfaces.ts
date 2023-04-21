//YOUTUBE UNIT6 - CLASS VS INTERFACE ROUND 1

//Classes and interfaces are very very similar.
//So it's easy to confuse them.
//But they are actually quite different

//An interface tells us what properties and methods an object should have
//It doesn't tell us what the method actually does, just what it takes in and returns


//Let's say we're making a massive multiplayer online game
// can never instantiate player
interface Player{
    characterName:string,
    currentLevel:number,
    experience:number,
    dateSignedUp:Date,
}

//You cannot instantiate interfaces. That means no new Player(). 
//Do not pass go, do not collect $200
//The following line will give you an error
//let newPlayer = new Player(); 

//What you are saying with an interface is this:
//I want to assure this object is of a certain shape
let newPlayer:Player = {
    characterName: "LeetWarrior",
    currentLevel: 50,
    experience: 10000,
    dateSignedUp: new Date(2022, 0, 15)
}

//interfaces are nice because I know the form I'm getting my data in
//I know for a fact what properties the object I'm receiving has
//This function will have no bugs as long as the object passed in fits the interface
//ASSUMES THE VARIABLE 'PLAYER' IS AN OBJECT
//ASSUMES TEH VARIALBE PLAYER HAS A PROPERTY CALLY 'currentLevel'
//ASSUMES THE VARIABLE PLAYER HAS A PROPERTY CALLED 'currentLevel' and it is a number
//function LevelUp(playe){
    //unless we have the interface 
function LevelUp(player:Player){
    player.currentLevel += 1;
}

//This means that we can't just create new players from a blueprint.
//But it does mean that I can be assured that properties are where I need them to be
//reference application of Employee, Managers and CodeMonkeys Day-3 classes-usage