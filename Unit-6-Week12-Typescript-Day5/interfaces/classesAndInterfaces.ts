//classes and interfaces are often used together

interface ClockInterface{
    currentTime:Date,
    //you can also do methods!
    setTime(d:Date) : void
}

//A class can implement an interface
//This is ... kind of like extends
//must have property and method
class DigitalAlarmClock implements ClockInterface{
    //try commenting the next line out and see if TS yells at you
    currentTime: Date;

    constructor(currentTime:Date){
        this.currentTime = currentTime;
    }
    //The interface says I have to have this method. I am forced to.
    //See line 6 where, d: Date
    setTime(newDate: Date): void {
        this.currentTime = newDate;
    }
}

//Notice how the interface doesn't tell you what to write inside the setTime function
//It simply says you must have a setTime function that takes in a take and returns void
//It doesn't tell you WHAT the method does, just it's parameters and return

