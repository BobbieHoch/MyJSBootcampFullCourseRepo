import { useState, useEffect } from "react";
import AddShoutOutForm from "../components/AddShoutOutForm";
import ShoutOutList from "../components/ShoutOutList";
import ShoutOut from "../models/ShoutOut";
import { fetchShoutOuts } from "../services/ShoutOutService";

function AllShoutOutsRoute() {
    const [ shoutOuts, setShoutOuts ] = useState<ShoutOut[]>([]);
    useEffect(loadShoutOuts, [])
  
    function loadShoutOuts() {
      fetchShoutOuts().then(setShoutOuts);
    }
  
    return (
      <div className="AllShoutOutsRoute">
        <h2>All Shout Outs</h2>
        <ShoutOutList shoutOuts={shoutOuts}/>
        <AddShoutOutForm onAdd={loadShoutOuts} />
      </div>
    );
  }
  
  export default AllShoutOutsRoute;