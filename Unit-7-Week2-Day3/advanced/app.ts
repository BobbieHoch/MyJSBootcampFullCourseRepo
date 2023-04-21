/*
NOTES
To test APIs we need a library called supertest and the typescript @types/supertest
It's still Jest, but jest wasn't built to do api testing out the box.
I already have the packages in package.json
The big difference you'll see is I split up the app into app.ts and server.ts
This makes it so you can test it in jest properly. If it's all one file, like we've
been doing in class, the tests won't run properly.
*/
//REQUIRES EXPRESS MODULE(S)
import express, { Application, Request, Response } from 'express';
//IMPORTS THE INTERFACE OF OBJECT AND PROPERTIES
import { Customer } from './customer';
//CREATES AN INSTANCE OF THE EXPRESS SERVER
const app:Application = express();

//DEFINE YOUR PORT(OF CHOICE)
const port = 3000;
//ALLOWS *POST* AND *PUT*  TO USE JSON BODIES
app.use(express.json());
app.use(express.urlencoded({extended: true}));

let customerList:Customer[] = [
    { id: 1, firstName: "Tony", lastName: "Stark", isRewardsMember: true, rewardsPoints: 5000000, dateJoined: new Date(2000, 1, 15)},
    { id: 2, firstName: "Steve", lastName: "Rogers", isRewardsMember: true, rewardsPoints: 10, dateJoined: new Date(2002, 3, 4)},
    { id: 3, firstName: "Natasha", lastName: "Romanov", isRewardsMember: false, rewardsPoints: 0, dateJoined: new Date(1984, 8, 6)},
    { id: 4, firstName: "Peter", lastName: "Parker", isRewardsMember: false, rewardsPoints: 0, dateJoined: new Date(2022, 1, 2)}
]

app.get("/customers", async (req:Request, res:Response): Promise<Response> => {
    return res.status(200).json(customerList);
});

app.get("/customers/:id", async (req:Request, res:Response): Promise<Response> => {
    let customerById = customerList.find((x) => x.id === Number(req.params.id));

    if(customerById === undefined){
        return res.status(404).send("who dat?");
    }
    else{
        return res.status(200).json(customerById);
    }
});

app.set("port", port);

export default app;