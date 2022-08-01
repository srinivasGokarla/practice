import React from 'react';
import {NavLink} from "react-router-dom"

export default function Menu() {
  return (
    <div>
       
       
        <NavLink exact activeClassName="active_class" to="/">About</NavLink>
        <NavLink  exact activeClassName="active_class" to="/contact">Contact</NavLink>
    </div>
  )
}
