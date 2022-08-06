import React from 'react';
import{ NavLink }from "react-router-dom"

export default function Error() {
  return (
    <div>
      <h1>404 Error page</h1>
      <h1>Opps!  Page Not  Pound</h1>
      <NavLink to="/">Goback</NavLink>
    </div>
  )
}
