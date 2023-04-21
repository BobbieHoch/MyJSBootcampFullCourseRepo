abstract class Bird{
    name:string;
    constructor(name:string){
        this.name = name;
    }

    //Base implementation
    MakeSound() : void {
        console.log('The ' + this.name + ' says: Bird sound!')
    }
}

class Dove extends Bird{
    //override
    MakeSound() : void {
        console.log('The ' + this.name + ' says: Coo!')
    }
}

class Eagle extends Bird{
    //override
    MakeSound() : void{
        console.log('The ' + this.name + ' says: Murica!')
    }
}

class Flamingo extends Bird{
    MakeSound(): void {
        super.MakeSound();
        console.log('Flamingos are mean birds.')
    }
}

var eagle = new Eagle("eagle");
var dove = new Dove("dove");
var flamingo = new Flamingo("flamingo");

// //See how each implementation gets to do its own thing?
dove.MakeSound();
eagle.MakeSound();
flamingo.MakeSound();

//We always deal with concrete birds