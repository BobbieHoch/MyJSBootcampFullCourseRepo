//This next part is hard. If you don't get it at first, don't feel bad.

//Interfaces allow us to do what is called composition
//Sometimes we don't want classes to inherit. Inheritance makes things messy.

//Let's say our app dealt with birds. Cool, we'll have a bird parent class
//and then we'll have other birds inherit from the parent bird class
//Lets be even fancier and make the bird class abstract so no one can instantiate it
//******ABSTRACT CAN'T BE INSTANIATED** */
//DRY Dont Repeat Yourself
abstract class Bird {
    speed:number;
    
    constructor(speed:number){
        this.speed = speed;
    }

    Fly(){
        console.log('Flying High in the air!')
    }
}

class Hawk extends Bird {
    Fly(): void {
        console.log('Flies and catches mice');
    }
}

class Eagle extends Bird {
    Fly(): void {
        console.log('Flies around Murica');
    }
}

//Everything is hunky dory...but what about penguins?

class Penguin extends Bird{
    //If I do nothing...then Penguin will use the default Fly method.
    //I guess I could override...?
    Fly() : void {
        console.log('Penguins dont fly');
    }
}

//Wait, I'm overriding a method and then saying "Hey I don't really use this method"
//If that's the case...why am I inheriting Bird?
//Well...I want Penguins to be treated the same as other birds.

let hawk = new Hawk(50);
let eagle = new Eagle(100);
let penguin = new Penguin(10);

let birdArray:Bird[] = [hawk, eagle, penguin];

//But now this is awkward. Basically Penguins are birds, but they don't fly
//Which means that anything in my app that deals with flying, I have to override in Penguin...to not do that
//That's bad design. Inheritance has shot me in the foot.

//But there is hope. Composition! Check out composition.ts