import React from 'react'

function List() {
    const numbers = [1, 2, 3, 4, 5];
const listItems = numbers.map((number) =>
  <li key={number.toString()}>
    {number}
  </li>
);
  return (<div>
<h1>List</h1>
<ul>{listItems}</ul>
  </div>
    
  )
}

export default List