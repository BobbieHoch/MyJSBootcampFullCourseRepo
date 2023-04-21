import menu from "../data/menu";
import { Item } from "../models/item";

export function getItemById(id:string) : Item | undefined {
    return menu.find((item) => item.id === id);
}