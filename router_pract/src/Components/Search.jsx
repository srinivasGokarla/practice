import React, {useState} from 'react';
import '../App.css';
import Sresult from "./Sresult"

export default function Search() {
    const[data, setData] = useState("")

    const InputChange = (e) => {
        setData(e.target.value)
    }

  return (
    <div>
        <input onChange={InputChange}
        type="text"
        value={data}
        placeholder="Search"
        />
        {data === "" ? null : < Sresult name={data}/> }
        
    </div>
  )
}
