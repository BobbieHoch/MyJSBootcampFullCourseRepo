//Typically you name interfaces with a capital I in front to indicate its an interface
interface IFly {
    fly() : void
}

//We have 'implements' keyword instead of extend
//Falcon inherits from Bird but Implements IFly
class Falcon extends Bird implements IFly {
    //The interface says I must have this method
    fly() : void {
        console.log('Soars majestically')
    }
}

class Helicopter implements IFly {
    fly() : void {
        console.log('Whirling blades slice through the air!')
    }
}

let thingsThatFly:IFly[] = [new Helicopter(), new Falcon(50)];

//Helicopters, Hot Air Baloons, and Falcons all fly, and can be treated the same
//due to polymorphism because they implement the same interface
//I can also inherit Bird when I need to. I would never have Helicopter inherit bird

