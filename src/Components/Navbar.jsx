import React, { useEffect, useState } from 'react'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { AiOutlineMenu } from "react-icons/ai";
import "./Navbar.css"
import { RxCross1 } from "react-icons/rx";


const Navbar = () => {
  const [sticky,setSticky]=useState(false);
  const [stick,setStick]=useState(false);
  const togglemenu=()=>{
    stick? setStick(false) : setStick(true);
  }

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      window.scrollY>50 ? setSticky(true) : setSticky(false);
    });


  },[]);
  return (
    <nav className={`container ${sticky ? 'dark-nav' : ' '}` }>
      <img src="https://cybersuiteproject.eu/wp-content/uploads/2024/03/Cyber-Suite-white-logo.svg" alt="" />
      <ul className={stick? '':"hide-menu-icon"}>
        <li>
          <Link to='hero' smooth={true} offset={0} duration={500}>Home</Link>
        </li>
        <li><Link to='about' smooth={true} offset={-100} duration={500}>About Us</Link></li>
        <li><Link to='team' smooth={true} offset={-150} duration={500}>Team</Link></li>
        <li><Link className='btn' to='contact' smooth={true} offset={-260} duration={500}>Contact Us</Link></li>
      </ul>

      {stick? <RxCross1 className='menu-icon' size={30} onClick={togglemenu}/>:<AiOutlineMenu className='menu-icon' size={30} onClick={togglemenu}/>}
    </nav>
  )
}

export default Navbar
