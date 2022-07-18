import React from 'react'

export default function DatePract() {
    const name = "Srinivas Gokarla";
    const now =  new Date().toLocaleDateString()
    const time = new Date().toLocaleTimeString()
  return (
    <div>
        <h1>{`My Name is ${name}`}</h1>
      <p>Date: {now}</p>
      <p>Time: {time}</p>
      
    </div>
  )
}
