import React from 'react'
import patel from "../Components/shiv2.jpg"
import roshan from "../Components/roshan.jpg"
import yogesh from "../Components/yogesh.jpg"
import vishal from "../Components/vishal.jpg"
import siddhesh from "../Components/siddhesh.jpg"
import satvick from "../Components/satvick.jpg"
import "./Team.css"

const Team = () => {
  return (
    <div id="team">

    <div className="roshan">
        <h1>Our Team</h1>
    </div>
    <div className='phones'>

        <div className="phone">
            <img src={patel} alt="" />
            <h1>Shiv Patel</h1>
            <p>I am in 3rd year pursuing Btech from IIT INDORE in Civil Engineering.</p>
            <button class="button-84" role="button"><a href="https://www.linkedin.com/in/shiv-patel-659b8925a/">Know More</a></button>
            
        </div>
        <div className="phone">
            <img src={yogesh} alt="" />
            <h1>Yogesh Patidar</h1>
            <p>I am in 3rd year pursuing Btech from IIT INDORE in Civil Engineering.</p>
            <button class="button-84" role="button"><a href="https://www.linkedin.com/in/yogesh-patidar-6b9225255/">Know More</a></button>
            
        </div>
       

        <div className="phone">
            <img src={roshan} alt="" />
            <h1>Roshan Saini</h1>
            <p>I am in 3rd year pursuing Btech from IIT INDORE in Civil Engineering.</p>
            <button class="button-84" role="button"><a href="https://www.linkedin.com/in/roshan-saini-6a2000260/">Know More</a></button>
            
        </div>
        <div className="phone">
            <img src={vishal} alt="" />
            <h1>Vishal</h1>
            <p>I am in 3rd year pursuing Btech from IIT INDORE in Civil Engineering.</p>
            <button class="button-84" role="button"><a href="https://www.linkedin.com/in/058vishal/">Know More</a></button>
            
        </div>
        
      
    </div>
    <div className="men">

    <div className="roshan">
        <h1>Our Mentors</h1>
    </div>
    <div className='phones'>

        <div className="phone number">
            <img src={siddhesh} alt="" />
            <h1>Siddhesh Waje</h1>
            <p>I am in 3rd year pursuing Btech from IIT INDORE in Computer Science Engineering.</p>
            <button class="button-84" role="button"><a href="https://www.linkedin.com/in/siddhesh-waje-526480253/">Know More</a></button>
            
        </div>
        <div className="phone">
            <img src={satvick} alt="" />
            <h1>Satvik Desai </h1>
            <p>I am in 3rd year pursuing Btech from IIT INDORE in Electrical Engineering.</p>
            <button class="button-84" role="button"><a href="https://www.linkedin.com/in/satvik-desai-b77a2524b/">Know More</a></button>
            
        </div>
        
      
    </div>
    </div>
    </div>
  )
}

export default Team
