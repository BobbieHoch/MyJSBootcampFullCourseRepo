//In willy nilly vanilla Javascript world...

let player = {
    characterName: "LeetWarrior",
    experience: 10000,
    dateSignedUp: new Date(2022, 0, 15)
}

//How do I know that the variable player on line 12 has a property called currentLevel?
//Do I know this for an absolute fact?
//What happens if I try to run this function and the property isn't on the object?
function LevelUp(playerToLevelUp){
    playerToLevelUp.currentLevel += 1;
}

//assuming the variable player is an object
//assuming the variable player has a property called currentLevel
//assuming the variable player has a property called currentLevel which is a number
//with TypeScript- we can't just create new players from a blueprint
//it does mean that I can be assured that properties are where I need them to be
