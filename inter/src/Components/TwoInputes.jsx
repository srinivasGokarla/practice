import React,{useState} from 'react'

const TwoInputes = () => {
    const[value, setValue] = useState(200)

  return (
    <div>
      <input type="number" onChange={(e) => setValue(e.target.value)}
      value={value}/>
      <input type="number" onChange={(e) => setValue(e.target.value)}
        value={200-value}/>
    </div>
  )
}

export default TwoInputes
