import express, {Request, Response} from "express";
import {getClient} from "../db";
import ShoutOut from "../models/ShoutOut";
import {ObjectId} from "mongodb";

export const shoutOutRoutes = express.Router();

//get all shoutouts
shoutOutRoutes.get("/", async (req:Request, res:Response)  => {
  try {
      const client = await getClient();
      
      const result = client
          .db("final")
          .collection<Place>("users")
          .find({})
      .toArray();
    
          return res.status(200).json(result);
      } catch (error) {
        return res.status(500).send(error);
      }
    });

    //only shoutouts to a particular person
shoutOutRoutes.get("/", async (req:Request, res:Response) => {
  const to = req.query.to as string;

  
  const mongoQuery: any = {};
  // if a to was specified, add it to the mongo query
  if (to) {
    mongoQuery.to = to; // { to: "Grant" }
  }

  try {
    const client = await getClient();
    const results = await client.db().collection<ShoutOut>("shoutouts").find(mongoQuery).toArray();

    return res.status(200).json(results);
  } catch (error) {
    return res.status(500).send(error);
  }
});

shoutOutRoutes.get("/:id", async (req:Request, res:Response) => {
  const id = req.params.id;
  try {
    const client = await getClient();
    const result = await client.db().collection<ShoutOut>("shoutouts").findOne({_id: new ObjectId(id)});

    if (!result) {
      return res.status(404).send("Shout out not found");
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).send(error);
  }
});

shoutOutRoutes.post("/", async (req:Request, res:Response) => {
  const shoutOut = req.body as ShoutOut;

  try {
    const client = await getClient();

    await client.db().collection<ShoutOut>("shoutouts").insertOne(shoutOut);

    return res.status(201).json(shoutOut);
  } catch (error) {
    return res.status(500).send(error);
  }
});

shoutOutRoutes.put("/:id", async (req:Request, res:Response) => {
  const id = req.params.id;
  const shoutOut = req.body as ShoutOut;
  delete shoutOut._id;

  try {
    const client = await getClient();
    const result = await client.db().collection<ShoutOut>("shoutouts").replaceOne({_id: new ObjectId(id)}, shoutOut);

    if (result.modifiedCount === 0) {
      return res.status(404).send("Not found");
    } else {
      shoutOut._id = new ObjectId(id);
      return res.json(shoutOut);
    }
  } catch (error) {
    return res.status(500).send(error);
  }
});

shoutOutRoutes.delete("/:id", async (req:Request, res:Response) => {
  const id = req.params.id;
  try {
    const client = await getClient();
    const result = await client.db().collection<ShoutOut>("shoutouts").deleteOne({_id: new ObjectId(id)});
    if (result.deletedCount === 0) {
      return res.status(404).json({message: "Not Found"});
    } else {
      return res.status(204).end();
    }
  } catch (err) {
    console.error("FAIL", err);
    return res.status(500).json({message: "Internal Server Error"});
  }
});