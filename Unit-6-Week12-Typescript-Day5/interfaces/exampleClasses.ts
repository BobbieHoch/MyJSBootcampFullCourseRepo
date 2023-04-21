//Its super important you understand the concept of TYPE
//Type in programming means "What kind of thing am I dealing with?"
//There are built in types like string, number, etc.
//Classes and interfaces are -custom- types we make. But they're still types

class Animal {
    numberOfLegs:number;

    constructor(numberOfLegs:number){
        this.numberOfLegs = numberOfLegs;
    }
    // Method Signature= name of function, any parameters, what is returns LINE 13
    MakeSound() : void {
        console.log('Default animal sound!')
    }
}

class Dog extends Animal{
    isAGoodBoy:boolean;

    constructor(numberOfLegs:number, isAGoodBoy:boolean){
        super(numberOfLegs);
        this.isAGoodBoy = isAGoodBoy;
    }

    //override
    MakeSound(): void {
        console.log('WOOF!');
    }
}

class Cat extends Animal{
    trappedInASunBeam:boolean;

    constructor(numberOfLegs:number, trappedInASunBeam:boolean){
        super(numberOfLegs);
        this.trappedInASunBeam = trappedInASunBeam;
    }

    //override
    MakeSound(): void {
        console.log('MEOW!');
    }
}

export {Animal, Cat, Dog}