import React, {useState, useEffect} from 'react'

const Effect = () => {
    const[count, setCount] = useState(0)

const Increment = () => {
    setCount(count+1)
}
const Decrement = () => {
    if(count>0)  {
        setCount(count-1)
    } else {
        setCount(0)
    }
}
useEffect(
    () => {
        document.title = `chats:${count}`
       
    }
) 

  return (
    <div>
        <h1>Counter:{count}</h1>
        <button onClick={Increment}>+</button>
        <button onClick={Decrement}>-</button>
      
    </div>
  )
}

export default Effect
