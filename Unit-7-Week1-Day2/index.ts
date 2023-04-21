import express, { Application, Request, Response } from 'express';
import { ItemRepo } from './itemRepo';

const app:Application = express();
const itemRepo = new ItemRepo();
//Destination entry for each program
const port = 3000;
//routing for APIs
app.use(express.json());
//makes incoming request in correct format
app.use(express.urlencoded({extended: true}));

//ENDPOINT IS TARGETED DATA
/****express looks at URL Runs match "string" function */
//localhost:3000/items
                //FUNCTION-async.....arrow function-
app.get("/items", async (req:Request, res:Response):Promise<Response> => {
    if (req.query.maxPrice === undefined) {
                //json makes data in readable format----res=response .
        return res.status(200).json(itemRepo.GetAllItems());
    }
    else {
                                 //using json
        return res.status(200).json(itemRepo.GetItemsBelowCost(Number(req.query.maxPrice)))
    }
});

//URI parameter /parameter unique id/  multple queus of requests   request    promise
// id spot and must match in get("/*** */") params.**
app.get("/items/:id", async (req:Request, res:Response) : Promise<Response> => {
    if(req.params.id === undefined){
        return res.status(400);
    }
    else{
        return res.status(200).json(itemRepo.GetItemById(Number(req.params.id)));
    }
});

app.post("/items", async (req:Request, res:Response) : Promise<Response> => {
    itemRepo.CreateItem({
        id: Number(req.body.id),
        name: req.body.name,
        quantity: Number(req.body.quantity),
        cost: Number(req.body.cost)
    });

    return res.status(201).send("Item created!");
});

app.put("/items/:id", async (req:Request, res:Response) : Promise<Response> => {
    itemRepo.UpdateItemQuantity(Number(req.params.id), Number(req.body.quantity));

    return res.status(200).send("Updated");
});

app.delete("/items/:id", async (req:Request, res:Response) : Promise<Response> => {
    itemRepo.DeleteItemById(Number(req.params.id));

    return res.status(200).send("Deleted");
})

app.listen(port, ():void => {
    console.log(`Listening on port ${port}`);
});
