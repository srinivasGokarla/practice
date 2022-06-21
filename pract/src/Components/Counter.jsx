import React, {useState,useEffect} from 'react'

function Counter() {
    const[count, setCount] = useState(0);
   
    useEffect(() => {
        document.title = `chats(${count})`
    })

  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={()=> setCount(count+1)}>+</button>
        <button  onClick={()=> setCount(count-1)}>-</button>
        <br/>
      

    </div>
  )
}

export default Counter