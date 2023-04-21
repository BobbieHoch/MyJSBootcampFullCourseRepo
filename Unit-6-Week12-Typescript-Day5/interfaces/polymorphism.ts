import { Animal, Cat, Dog } from "./exampleClasses";

//When you inherit from something, you actually have two types!
let fido = new Dog(4, true);

//the variable fido is both a Dog and an Animal
//You can think of it as having two types!

//Here's a Cat
//It's both a Cat and an Animal
let fluffy = new Cat(4, false);

//Now, here is the magic of polymorphism
let menagerie:Animal[] = [];

let dogArray:Dog[] = [];
let catArray:Cat[] = [];

dogArray.push(fido);
catArray.push(fluffy);

//I can add Cats and Dogs to this array!
menagerie.push(fido);
menagerie.push(fluffy);

//Why? Because the Dog class and the Cat class both inherit from Animal
//That means that anything with the type of Animal, they can fill in for
//In fact you could re-read line 14 as "an array of anything that is the Animal class or inherits from it"

//Why do we care?
for(let animal of menagerie){
    //The Animal class has a MakeSound method remember?
    animal.MakeSound();
}

//Dogs and Cats can be there own classes, but because they share a class, I can treat them the same