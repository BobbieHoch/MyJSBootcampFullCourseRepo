import { Router, Request, Response } from "express";

import { Item } from "./item";

//hard coded data
let itemArray: Item[] = [
    { id: 1, quantity:20, price:10, product: "Eggs", isActive: true},
    { id: 2, quantity:5, price:15, product: "Quinoa", isActive: true},
    { id: 3, quantity:2, price:20.75, product: "Steak", isActive: true},
    { id: 4, quantity:2000, price:1.2, product: "Gum", isActive: true}
];

export const itemRouter = Router();

//CRUD create read update delete

//succeeded, failed or pending                               Promise 'object type'=Response
itemRouter.get("/", async (req: Request, res: Response): Promise<Response> => {
    if (req.query.maxPrice !== undefined) {
        let underArray = itemArray.filter((x) => x.price <= Number(req.query.maxPrice) && x.isActive);
        return res.status(200).json(underArray);

  //prefix is the parameter
    }else if(req.query.prefix !== undefined){
        let startsWithArray = itemArray.filter((x) => x.product.startsWith(String(req.query.prefix))&& x.isActive);
        return res.status(200).json(startsWithArray);
     }
     else {
        // let pageSize = itemArray.slice (0,Number(req.query.pageSize))
        return res.status(200).json(itemArray);
    }
    
    });
//URI parameter
    itemRouter.get("/:id", async (req:Request, res:Response) : Promise<Response> =>{
        let itemIWantToFind = itemArray.find((x) => x.id === Number(req.params.id));

        if(itemIWantToFind === undefined){
            return res.status(404). send("ID not Fount");
        }
        else{
            return res.status(404). send(itemIWantToFind);
        }
        //****POST********** */
    }); 

    itemRouter.post("/", async (req:Request, res:Response) : Promise<Response>  => {
        let newItem:Item = {
            id: GetNextId(),
            product: String(req.body.product),
            price: Number(req.body.price),
            quantity: Number(req.body.quantity),
            isActive: true
};
    itemArray.push(newItem);
        return res.status(201).json(newItem);

    });

 itemRouter.put("/:id", async (req:Request, res:Response): Promise<Response> => {
         let itemFound = itemArray.find((x) => x.id === Number(req.params.id));
         
if(itemFound !== undefined){
    itemFound.price = Number(req.body.price);
    itemFound.product = String(req.body.product);
    itemFound.quantity = Number(req.body.quantity);
    itemFound.isActive = Boolean(req.body.isActive);

    return res.status(200).json(itemFound);
}
else{
    return res.status(404).send("Hey I didn't find it bro");
}
    });
    itemRouter.delete("/:id", async (req:Request, res:Response) : Promise<Response> => {
        let itemFound = itemArray.find((x) => x.id === Number(req.params.id));
    
        if(itemFound === undefined){
            return res.status(404).send("Who dat?");
        }
        else{
            itemArray = itemArray.filter((x) => x.id !== Number(req.params.id));
    
            return res.status(204).send("Deleted");
        }
    });

    function GetNextId(){
        return Math.max(...itemArray.map((x) => x.id)) + 1;
     }

