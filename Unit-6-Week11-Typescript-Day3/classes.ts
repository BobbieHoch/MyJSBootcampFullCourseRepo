//YOUTUBE VIDEO UNIT 6 - CLASSES AND INHERITANCE
//BASE CLASS
class Employee{
    //properties of the Employee class
    firstName: string;
    lastName: string;
    employeeId: string;
    startDate: Date;
    onVacation: boolean
  
        //any property listed above must be set in the constructor
        //either by passing it in or setting it.
        //do not pass go do not collect $200

    constructor(firstName: string, lastName: string, employeeId: string, startDate: Date, onVacation: boolean) {
             //the this keyword refers to the Employee object
        this.firstName = firstName;
        this.lastName = lastName;
        this.employeeId = employeeId;
        this.startDate = startDate;
        this.onVacation = onVacation;
    }

        //classes can have methods. These are re-usable functions for our convenience
        //does NOT require the function keyword
        GetEmployeeFullName() : string {
            return this.firstName + " " + this.lastName;
    }

        GetTimeWiththeCompanyInDays() : number {
        //Date is a built-in object.
        //If you instantiate a new one, it defaults to the current date and time on the computer it runs on
        //Be sure you understand that last part!
            //DATE CLASS IS ITS OWN FUNCTION
        let currentDate = new Date();
        const msInDay = 24 * 60 * 60 * 1000;

        return Math.round(Math.abs(Number(this.startDate) - Number(currentDate)) / msInDay);
    }

}//////END OF CLASS///////////

//Subclass-Manager inherits from Employee
//After all, managers are also employees, just a bit different
//What's the same, and what's different
class Manager extends Employee {
    canMakeBankDeposits: boolean;
    canApproveVacation: boolean;

    constructor(firstName: string, lastName: string, employeeId: string, startDate: Date, onVacation: boolean, canMakeBankDeposits: boolean, canApproveVacation: boolean) {
        //SUPER KEYWORD
        //the super keyword refers to the parent class'EMPLOYEE'
        //it means Hey, go to the parent class and run the constructor with these three arguments
        super(firstName, lastName, employeeId, startDate, onVacation);
        //these properties don't exist in the parent class
        this.canMakeBankDeposits = canMakeBankDeposits;
        this.canApproveVacation = canApproveVacation;
    }
    ApproveEmployeeVacation(employee: Employee): void {
        if (!this.canApproveVacation) {
            console.log(`${this.GetEmployeeFullName()} says "I'm sorry ${employee.GetEmployeeFullName()}, but I can't approve vacay."`);
        }
        else if (employee.onVacation) {
            console.log(`${this.GetEmployeeFullName()} says "Umm ${employee.GetEmployeeFullName()}, you're already on vacation?"`);
        }
        else {
            //Employees need to have worked at the company 90 days
            if (employee.GetTimeWiththeCompanyInDays() < 90) {
                console.log(`${this.GetEmployeeFullName()} says "I'm sorry ${employee.GetEmployeeFullName()}, you haven't been with the company 90 days."`);
            }
            else {
                console.log(`${this.GetEmployeeFullName()} says "Vacation approved!"`);
                employee.onVacation = true;
            }
        }
    }
}
class CodeMonkey extends Employee{
    enjoysFritos:boolean;
    mountainDewConsumed:number;
    energyToCode:number;
        //EMPLOYEE CLASS SENDS ALL THE BASIC OBJECTS
    constructor(firstName:string, lastName:string, employeeId:string, startDate:Date, onVacation:boolean, enjoysFritos:boolean, mountainDewConsumed:number, energyToCode:number){
        super(firstName, lastName, employeeId, startDate, onVacation);

        this.enjoysFritos = enjoysFritos;
        this.mountainDewConsumed = mountainDewConsumed;
        this.energyToCode = energyToCode;
    }
    //GETEMPLOYEEFULLNAME-----ALREADY IN PARENT CLASS AND PARENT FUNCTIONS
    ConsumeMountainDew() : void {
        this.mountainDewConsumed++;
        this.energyToCode += 5;
        console.log(this.GetEmployeeFullName() + ' finds new energy!');
    }

    WriteCode(){
        this.energyToCode -= 5;

        //Wait a moment, where did this function come from?
        console.log(this.GetEmployeeFullName() + " begins hitting the keys!");
    }
}

export {Employee, Manager, CodeMonkey}