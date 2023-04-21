import express, { Application, Request, Response } from 'express';
//express validator library
import { body, validationResult } from 'express-validator';
import { User } from './User';

const app:Application = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

let users:User[] = [
    { id: 1, name: "Steve Urkel", email:"DidIdothat@gmail.com", phoneNumber: "8675309", zipCode: "48721"},
    { id: 2, name: "Carl Winslow", email:"chicagoPD@gmail.com", phoneNumber: "8675309", zipCode: "48721"},
    { id: 3, name: "Laura Winslow", email:"goAwaySteven@gmail.com", phoneNumber: "8675309", zipCode: "48721"},
];

app.post("/users", 
        body('email').isEmail().normalizeEmail(),
        body('name').isLength({min: 3}),
        body('zipCode').isPostalCode('US'),
        body('phoneNumber').isMobilePhone(['en-US']),
        async (req:Request, res:Response): Promise<Response> => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
            }
            let newUser:User = {
                id: GetNextId(),
                name: req.body.name,
                email: req.body.email,
                phoneNumber: req.body.phoneNumber,
                zipCode: req.body.zipCode,        
            }

            users.push(newUser);

            return res.status(201).json(newUser);
        });

app.listen(port, ():void => {
    console.log(`Listening on port ${port}`);
});

function GetNextId(){
    return Math.max(...users.map((x) => x.id)) + 1;
 }