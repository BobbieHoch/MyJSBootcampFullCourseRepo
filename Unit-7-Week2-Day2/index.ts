import express, { Application, Request, Response } from "express";
import { itemRouter } from "./routes";

const app: Application = express();

const port = 3000;

//routing for APIs
app.use(express.json());
//makes incoming request in correct format
app.use(express.urlencoded({ extended: true }));

app.use("/cart-items", itemRouter);

//listen needs 2 parameters-1port server will run on &2 what to return
app.listen(port, (): void => {
    console.log(`Listening on port ${port}`);
});
