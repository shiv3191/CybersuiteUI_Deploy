import React from 'react'
import { Link } from 'react-scroll';
import "./Hero.css"
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='hero container'>
         <h1 >Welcome to Cybersuite</h1>
         <p className='parag'>
            It includes
         </p>
         <div className='size'>

        <ReactTyped
            className="shiv"
            strings={[" Email Spam Classifier", " Password Checker", " Keylogger"]}
            typeSpeed={40}
            backSpeed={50}
            loop={true}
         />
         </div>
         <Link className='btn bn' to='cards' smooth={true} offset={-150} duration={500}>Get Started <img src="https://www.clipartbest.com/cliparts/7Ta/6eR/7Ta6eRqLc.png" alt="" /></Link>
        
    </div>
  )
}

export default Hero
