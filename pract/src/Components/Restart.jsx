import React,{useState} from 'react'

const Restart = () => {
  const name = "Srinivas Gokarla";
  const now =  new Date().toLocaleDateString()
  const time = new Date().toLocaleTimeString()
    const[data, setData] = useState(0);
    const[text, setText] = useState("")

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
      <h3>value:{text}</h3>
      <input type="text"
       placeholder="Enter Text"
       onChange={(e) => setText(e.target.value)}
       value={text} />
       <button disabled={text.length < 1}>submit</button>
       <h1>{`My Name is ${name}`}</h1>
      <p>Date: {now}</p>
      <p>Time: {time}</p>
    </div>
  )
}

export default Restart
