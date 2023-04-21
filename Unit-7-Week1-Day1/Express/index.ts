
import express, { Application, Request, Response } from 'express';

const app:Application = express();

const port = 3000;
//REQUIRED APPLICATIONS AS BASE-//telling app what to use 2 bases***
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//ENDPOINT
//localhost:3000/items

//GET/=BASE URL***ASYNCHRONOUS FUNCTION*****PROMISE GETS YOU SOME KIND OF RESPONSE

app.get("/", async (req: Request, res: Response): Promise<Response> => {

    //200 MEANS SUCCESSFUL CONNECTION TO SERVER
    return res.status(200).send({
        message: 'Hey there!'});
    });

    //TAKE ACTION AND SEND LOG UPDATE**//listen function sits and waits for

app.listen(port, (): void => {
    console.log(`Listening on port ${port}`);
});

