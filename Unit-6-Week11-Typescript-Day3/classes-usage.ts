import { Employee, Manager, CodeMonkey } from './classes';

//Let's create some employees!
//the 'new' keyword instantiates a new manager
//remember the constructor! If you forget the arguments you can hover over and it will tell you

let manager1 = new Manager("Michael", "Scott", "A5723B", new Date(2010, 0, 15), false, true, true);

// constructor(firstName: string, lastName: string, employeeId: string, startDate: Date, onVacation: boolean) {
    //the this keyword refers to the Employee object
// this.firstName = firstName;
// this.lastName = lastName;
// this.employeeId = employeeId;
// this.startDate = startDate;
//this.onVacation = onVacation;
    //}




let manager2 = new Manager("William", "Lumbergh", "B123445C", new Date(2015, 5, 17), false, false, false);

let codeMonkey1 = new CodeMonkey("Byron", "Smith", "98234C", new Date(2022, 11, 10), false, true, 0, 100);

let codeMonkey2 = new CodeMonkey("Mona", "Lisa", "18X34CB", new Date(2021, 8, 5), false, true, 10, 20);

let codeMonkey3 = new CodeMonkey("Bart", "Simpson", "12X3HHCB", new Date(1989, 5, 15), true, true, 100, 0);

//The entire point of Object Oriented Programming is that objects interact with each other to do work
//Objects package data neatly and they also provide functionality for convenience
//OOP is not the only game in town, there is functional programming, but that's outside the scope of the boot camp

//What will happen?
//FUNCTION APPROVEEMPLOYEEVACATION ONLY IN MANAGER CLASS
manager2.ApproveEmployeeVacation(codeMonkey1);

manager1.ApproveEmployeeVacation(codeMonkey1);
manager1.ApproveEmployeeVacation(codeMonkey2);
manager1.ApproveEmployeeVacation(codeMonkey3);

// codeMonkey2.ConsumeMountainDew();

// codeMonkey1.WriteCode();