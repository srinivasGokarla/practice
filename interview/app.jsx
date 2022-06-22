
import React, {useState} from 'react';



export const   APP = () => {
    const [counter, setCounter] = useState(0)
    if(counter <  11) {
        counter = 0
    }

      return (
        <div>
            <button onClick={() => setCounter(counter+1)}>+</button>
            <h1  onClick={() => setCounter(counter-1)}>Counter: {counter}</h1>
            <button>-</button>
        </div>
      )
}