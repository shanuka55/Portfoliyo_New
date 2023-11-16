import "./NavbarStyle.css"
import React ,{ useState } from 'react';
import { Link } from "react-router-dom";


const Navbar = () => {

  const [color, setcolor] = useState(false);
  const changeColor = () =>{
    if(window.screenY >=100){
      setcolor(true);
    }else{
      setcolor(false);
  
    }
  };

  window.addEventListener("scroll",changeColor);


  return (
    <div className={color ? "header header-bg": "header"}>
      <Link to="/" className="name">
        <h1><span className="span">S</span>hanuka</h1>
      </Link>
      <ul className="nav-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/skill">Skill</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  )
}

export default Navbar