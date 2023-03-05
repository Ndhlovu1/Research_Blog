import React from 'react'
import './sideBar.css'

function Sidebar() {
  return (
    // The div for sideBar will be the main css controller for how our data will look
    <div className='sideBar'>
      <div className="sideBarItem">  
        <span className="sideBarTitle">PRACTICAL AND INNOVATIVE SOLUTIONS : </span>
         <p>
            In 2022, the organizers of the world's largest technology events and conferences will have to decide whether to stick to the virtual model or return to an in-person format.
          </p> 
          <img src='https://cdn.mos.cms.futurecdn.net/74pCXBPyfCvb7HWEdm57HE-970-80.jpg.webp' alt='tech_cruch' />
          
      </div>
      
      <div className='sideBarItem'>
        <span className='sideBarTitle'>MAIN ITEMS</span>

        <ul className="sideBarList">
          <li className='sideBarListItem'>TECH COMMITTEE</li>
          <li className='sideBarListItem'>INVITED SPEAKERS</li>
          <li className='sideBarListItem'>TOPICS</li>
          <li className='sideBarListItem'>CONFERENCE VENUE</li> 
          <li className='sideBarListItem'>GUIDELINES</li> 
          <li className='sideBarListItem'>CONFERENCE VENUE</li> 
        </ul>
      </div>

      <div className="sideBarItem">
        <span className='sideBarTitle'>FOLLOW US</span>
        <div className="sideBarSocial">
            <i className="sideBarIcon fa-brands fa-linkedin"></i>
            <i className="sideBarIcon fa-brands fa-square-github"></i>
            <i className="sideBarIcon fa-brands fa-square-twitter"></i>
        </div>
      </div>

    </div>
  )
} 

export default Sidebar
