import React from 'react'
import { Container } from 'reactstrap'
import {Link, NavLink} from 'react-router-dom'
import Pagelist  from '../pages/Pagelist'


export const Header = () => {
  return (
    <div class="header">
      <h1>My Website</h1>
      <p>Resize the browser window to see the effect.</p>
    </div>
  )
}

export default Header