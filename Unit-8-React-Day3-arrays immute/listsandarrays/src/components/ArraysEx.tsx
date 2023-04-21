import { useState } from 'react';

export function ArraysEx () {
    const [colors, setColors] = useState<string[]>(["red", "orange", "purple", "blue"])

    function addColor(color:string) : void {
        setColors([...colors, color]);
        //colors.push(color);
    }

    return (
    <div>
      <ol>
        { colors.map((color, index) => <li key={index}>{color}</li>)}
      </ol>
      <button onClick={() => addColor('Violet')}>Violet</button>
      <button onClick={() => addColor('Green')}>Green</button>
    </div>
  );
}
