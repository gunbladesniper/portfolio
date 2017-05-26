import React from 'react';
import {Link} from 'react-router-dom';

const NavButton =(props)=>{
  return(
    <Link to={props.path}>
      <button className={props.className} >
      {props.label}
      </button>
    </Link>
  )
}

export default NavButton;
