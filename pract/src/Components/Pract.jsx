import React from 'react'

export default function Pract() {
    const users = [
        { name: "John Doe", id: 1 },
        { name: "Jane Doe", id: 2 },
        { name: "Billy Doe", id: 3 }
    ];
    const arr = [1,2,3,4,5]
    const arrItem = arr.map((number) => 
    <li key={number.toString()}>
      {number}
    </li>)
    const UserList = users.map((user) => <li key={user.id}>
       {user.name}</li>)

  return (
    <div>
<h1>Prcticing Mapping</h1>
<ul>{UserList}</ul>
<ul>{arrItem}</ul>
    </div>
  )
}
