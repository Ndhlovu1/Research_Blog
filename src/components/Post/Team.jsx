import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import "./team.css"
import MyImage from "./speakers.png"


function Team() {
    // This is for the Team
  return (
    <div className='Team'>
    <>
      <div className='write'>
        <img 
            className='teamImage'
            src={MyImage}
            alt='ima'
        /> 
        </div>
        <div className="sideBar">
            <Sidebar/>
        </div>
    </>
    </div>
  )
}

export default Team
