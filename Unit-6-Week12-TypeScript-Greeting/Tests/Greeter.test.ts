const {Greeter} = require("./Greeter");
// import { Greeter } from "./Greeter";
//Now we can do arrange, act, assert!
describe('Greeter greeting combines with name', () => {
    test('Greeting Good Morrow combines with Fred correctly', () => {
        //arrange
        //instantiate any objects you need, and set up your test
       
        //act
       let salutation  = greeter()();

        //assert
        expect(salutation).toBe("Clark Kent");
    })