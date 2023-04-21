/*
This may surprise you, but phoneNumbers and zipCodes are better off as strings
*/
export interface User {
    id:number,
    name:string,
    email:string,
    phoneNumber:string,
    zipCode:string
}