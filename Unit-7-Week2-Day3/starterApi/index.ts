/*
This is the minimum amount of code to run the server.
You can start from here
*/
import express, { Application, Request, Response } from 'express';

const app:Application = express();

//whatever port makes sense for you
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.listen(port, ():void => {
    console.log(`Listening on port ${port}`);
});