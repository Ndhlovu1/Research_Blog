//import React from 'react'
import "./topBar.css"

export default function TopBar(){
    return (
       <div className="top"> 
            
            <div className="topLeft">
                <i className="topIcon fa-brands fa-linkedin"></i>
                <i className="topIcon fa-brands fa-square-github"></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>

            </div>
            
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">SUBMISSION</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">READ</li>
                </ul>

            </div>

            <div className="topRight">
                <img 
                className="topImg"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" 
                alt="profile_Image" />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
       </div> 
    )
}





   