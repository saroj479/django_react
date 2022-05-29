import React from 'react';
import {  Link } from "react-router-dom";
import Pagedetails from '../pages/Pagedetails';
const Navbar= () =>{
  return (
  <div className='topnav'>
    <li className='active'>
      <Link to="/">Dogs</Link>
    </li>
    <li>
      <Link to="/new/">Cats</Link>
    </li>
    <li>
      <Link to="#sheeps">Sheeps</Link>
    </li>
    <li>
      <Link to="#goats">Goats</Link>
    </li>
  </div>
  );
}
export default Navbar;