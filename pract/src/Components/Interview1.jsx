import React, {useState,useEffect} from 'react'

const Interview1 = () => {
    const [k,setK] = useState(89);

useEffect(() => {
    setK(30);
    console.log(k);
    },[k]);
  return (
    <div>
        <h1>{k}</h1>
      
    </div>
  )
}

export default Interview1
