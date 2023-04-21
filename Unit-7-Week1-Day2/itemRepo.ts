import { Item } from "./item";
//Repository
class ItemRepo {
    //Entity-this case its 'items' could be more entities
    private items:Item[] = [
        {id: 1, name:"Milk", cost:2.99, quantity: 10},
        {id: 2, name:"Eggs", cost:1.99, quantity: 15},
        {id: 3, name:"Bread", cost:2.99, quantity: 5},
        {id: 4, name:"Ham", cost:5.99, quantity: 25}
    ]

    // CRUD operations = Create Read Update Delete

    // READ--function to get array of items
    GetAllItems() : Item[] {
        return this.items;
    }

    GetItemById(id: number): Item | undefined {
        //FIND FUNCTION ALWAYS GRABS FIRST
        return this.items.find((x) => x.id === id);
    }

    //CREATE
    //MAKE SURE ID IS UNIQUE ++CODE TO CHECK **VALIDATION MORE ADVANCED****
    CreateItem(item:Item){
        this.items.push(item);

        return item;
    }

    //Delete
    DeleteItemById(id: number) {
        //FILTER CREATES NEW ARRAY-
        this.items = this.items.filter((x) => x.id !== id);
    }

    //Update-QUANTITY IN THIS CASE
    UpdateItemQuantity(id:number, quantity:number){
        let itemToUpdate = this.GetItemById(id);
        //CHECK ITEM IS NOT UNDEFINED
        if(itemToUpdate !== undefined){
            itemToUpdate.quantity = quantity;
        }
    }

    GetItemsBelowCost(cost:number){
        return this.items.filter((x) => x.cost <= cost);
    }
}

export { ItemRepo }



