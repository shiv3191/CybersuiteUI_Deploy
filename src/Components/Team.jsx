import React from 'react'
import patel from "../Components/shiv2.jpg"
import roshan from "../Components/roshan.jpg"
import yogesh from "../Components/yogesh.jpg"
import vishal from "../Components/vishal.jpg"
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
    </div>
  )
}

export default Team
