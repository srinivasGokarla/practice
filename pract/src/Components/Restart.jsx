import React,{useState} from 'react'

const Restart = () => {
    const[data, setData] = useState(0);

    const handleIncrement = () => {
        setData(data + 1)
    }
    const handleDecrement = () => {
        if(data > 0) {
            setData(data-1)
        } else {
            setData(0)
        }
    } 
        
    

  return (
    <div>
      <h1>Again prcaticing starting</h1>
      <h3>Counter: {data}</h3>
      <button onClick={handleIncrement}>+</button>
      <button  onClick={handleDecrement}>-</button>

    </div>
  )
}

export default Restart
