//YOUTUBE 'Unit- 6 Interfaces and Inheritance-enum;extends an interface.
//INHERITANCE-'SHARING CLASSES AND INTERFACES WITH OTHER CLASSES- RIGHT LESS UPDATE ONLY IN ONE LOCATION

//enums are used when you want to RESTRICT choice
//each enum value is assigned a number in order ASSIGNED INDEX
//LATER FUNCTIONS WILL TOTALLY INDEX ACCORDING TO THIS ORDER
//Can add new ones but never change the order
//enums don't exist in Javascript
enum ConsumptionType{
    Omnivore,
    Carnivore,
    Herbivore,
    Insectivore
}

//Using birds as an example-THIS IS THE PARENT THAT SETS BASE PROPERTIES AT MINIMUM
interface Animal{
    numberOfLegs:number,
    canFly:boolean,
    name:string,
    //this is an enum, see below
    consumptionType:ConsumptionType
}

//extends KEY WORD = means inherits
//everything from animal gets copied over for dogs
//this way, dogs and cats can be different, but inherit properties from their parent
//this prevents a lot of duplicate code

interface Dog extends Animal{
    breed:string,
    isAGoodBoy:boolean,
}

interface Cat extends Animal{
    breed:string,
    sleepingInSunBeam:boolean,
}

interface Aardvark extends Animal{
    isCurrentlyInBurrow:boolean,
}

//numberOfLegs, canFly, name, and consumptionType are all in the animal interface
//Dog inherits from animal all the objects, so it must have those properties
let fido:Dog = {
    numberOfLegs: 4,
    canFly:false,
    name: "Fido",
    consumptionType: ConsumptionType.Omnivore,
    breed: "Labrador Retriever",
    isAGoodBoy: true
}

let shadow:Cat = {
    numberOfLegs: 4,
    canFly: false,
    name:"Shadow",
    consumptionType: ConsumptionType.Carnivore,
    breed:"Tabby",
    sleepingInSunBeam: true
}

let aardvarkius:Aardvark = {
    numberOfLegs: 4,
    canFly: false,
    name: "Aardvarkius",
    //enum ConsumptionType-drop down of choices
    consumptionType: ConsumptionType.Insectivore,
    isCurrentlyInBurrow: false
}


