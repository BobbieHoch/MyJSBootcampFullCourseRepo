import { useState } from "react";
import { Item } from "../models/Item";
import { menuData } from '../data/MenuData';
import { MenuItem } from "./MenuItem";

//container component
export function MenuList(){
    const [menuList, setMenuList] = useState<Item[]>(menuData);
    
    return(
    <div className="MenuList">
        { menuList.map((item) => <MenuItem item={item} key={item.id} />) }
    </div>
    );
}