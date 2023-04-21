import { useState, useEffect, FormEvent } from "react";
import ShoutOut from "../models/ShoutOut";
import { addShoutOut } from "../services/ShoutOutService";
import FormInput from "./FormInput";


interface Props {
    initialTo?: string;
    onAdd?: (shoutout: ShoutOut) => void
  }
  
  function AddShoutOutForm({ initialTo = "", onAdd }: Props) {
    const [ to, setTo ] = useState(initialTo);
    const [ from, setFrom ] = useState("");
    const [ text, setText ] = useState("");
  
    useEffect(() => setTo(initialTo), [initialTo]);
  
    function handleSubmit(e: FormEvent) {
      e.preventDefault();
      addShoutOut({
        to, from, text
      }).then(onAdd);
      setTo(initialTo);
      setFrom("");
      setText("");
    }
  
    return (
      <form className="AddShoutOutForm" onSubmit={handleSubmit}>
        <h3>Leave a Shout Out</h3>
        <FormInput label="To" id="AddShoutOutForm__to" value={to} onChange={setTo} required minLength={2}/>
        <FormInput label="From" id="AddShoutOutForm__from" value={from} onChange={setFrom} required minLength={2}/>
        <p className="FormInput">
          <label htmlFor="AddShoutOutForm__shoutout">Shout Out</label>
          <textarea id="AddShoutOutForm__shoutout" value={text}  onChange={e => setText(e.target.value)} required minLength={2} rows={4}/>
        </p>
        <p>
          <button>Submit Shout Out!</button>
        </p>
      </form>
    );
  }
  
  export default AddShoutOutForm;