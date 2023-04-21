import { Router, Request, Response } from "express";
import { getClient } from "../server/db/db";

export const peopleRouter = Router();

peopleRouter.get("/", async (req:Request, res:Response) : Promise<Response> => {
    try{
        const client = await getClient();

        let result = await client.collection('people').find({}).toArray();

        return res.status(200).json(result);
    }
    catch (err){
        return res.status(500);
    }
})
