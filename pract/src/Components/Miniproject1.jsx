import React from 'react'

export default function Miniproject1() {
    let greeting = "";
    let now = new Date();
     now = now.getHours();
     const cssStyle = { }

     if(now >= 1 && now < 12) {
        greeting = 'Good Morning';
        cssStyle.color = 'Green'
     } else if(now >= 12 && now < 19) {
        greeting = "Good Afternoon";
        cssStyle.color = 'Orange'
     } else {
        greeting = "Good Night";
        cssStyle.color = 'Red'
     }

  return (
    <div>
        <h1>Miniproject1</h1>
        <h3>Hello sir, <span style={cssStyle}>{greeting}</span></h3>
    </div>
  )
}
