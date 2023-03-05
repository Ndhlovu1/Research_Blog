//import React from 'react'
import "./topBar.css"
import { Link } from "react-router-dom";

export default function TopBar(){
    //User to change the views
    const user = false;
    return (
       <div className="top"> 
            {/* THE TOP RIGHT ICONS */}
            <div className="topLeft">
                <i className="topIcon fa-brands fa-linkedin">
                <Link to="github.com/ndhlovu1" style={{textDecoration:"none", color:"inherit"}}></Link>
                </i>
                <i className="topIcon fa-brands fa-square-github"></i>
                <i className="topIcon fa-brands fa-square-twitter"></i>

            </div>
            
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link to="/" style={{textDecoration:"none", color:"inherit"}}>HOME</Link>
                    </li>

                    <li className="topListItem">
                        <Link to="/Team" style={{textDecoration:"none", color:"inherit"}}>TEAM</Link>
                    </li>

                    <li className="topListItem">
                        <Link to="Create" style={{textDecoration:"none", color:"inherit"}}>SUBMISSION</Link>
                    </li>
        
                    <li className="topListItem">
                        <Link to="Post/:postId" style={{textDecoration:"none", color:"inherit"}}>TOP-POST</Link>
                    </li>
                   
                    <li className="topListItem"></li>
                    <li className="topListItem"></li>
                    <li className="topListItem">
                        
                        {user && "SIGNOUT"}
                        </li>
                </ul>

            </div>

            <div className="topRight">
                {/* if there's a user show this image, else show nothing */}
                {
                user ? (<img 
                    className="topImg"
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" 
                    alt="profile_Image" />)  
                    :
                    (
                    <ul className = "topList">
                        <li className="topListItem">
                            <Link to="Login" style={{textDecoration:"none", color:"inherit"}}>LOGIN</Link>
                        </li>

                        <li className="topListItem">
                            <Link to="Register" style={{textDecoration:"none", color:"inherit"}}>REGISTER</Link>
                        </li>

                    </ul>)
                    }
                
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
       </div> 
    )
}





   