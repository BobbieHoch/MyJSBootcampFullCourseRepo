import { useState } from "react";
import '../css/LightSwitch.css';

export function LightSwitch(){
    const [isOn, setIsOn] = useState<boolean>(false);
    
    function displayOffAndOn(){
        return isOn ? "ON" : "OFF";
    }

    let switchClass = "LightSwitch " + (isOn ? "Switch--on" : "Switch--off");

    return(
    <div className={switchClass}>
        <h1>Switch</h1>
        <h3>{displayOffAndOn()}</h3>
        <button onClick={() => setIsOn(!isOn)}>FLIP</button>
    </div>
    )
}