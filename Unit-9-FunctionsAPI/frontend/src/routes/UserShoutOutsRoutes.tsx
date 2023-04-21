import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import AddShoutOutForm from "../components/AddShoutOutForm";
import ShoutOutList from "../components/ShoutOutList";
import ShoutOut from "../models/ShoutOut";
import { fetchShoutOutsTo } from "../services/ShoutOutService";

function UserShoutOutsRoute() {
    const [ shoutOuts, setShoutOuts ] = useState<ShoutOut[]>([]);
    const user = useParams().user!;
    useEffect(loadShoutOuts, [user])
  
    function loadShoutOuts() {
      fetchShoutOutsTo(user).then(setShoutOuts);
    }
  
    return (
      <div className="UserShoutOutsRoute">
        <h2>Shout Outs for {user}</h2>
        <p>
          <Link to="/">Back to All Shoutouts</Link>
        </p>
        <ShoutOutList shoutOuts={shoutOuts} />
        <AddShoutOutForm initialTo={user} onAdd={loadShoutOuts}/>
      </div>
    );
  }
  
  export default UserShoutOutsRoute;