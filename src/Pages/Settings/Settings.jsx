import React from 'react'
import "./settings.css"
import Sidebar from "../../components/Sidebar/Sidebar"

function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className='settingsUpTitle'>PROFILE UPDATE</span>
                <span className='settingsDelTitle'>MY PROFILE - DELETE</span>
            </div>
                <form className="settingsForm">
                    <label>PROFILE PICTURE </label>
                    <div className='settingsProfilePic'>
 
                        <img src="https://cdn.shopify.com/s/files/1/0576/4943/0736/files/alexandre-pellaes-6vAjp0pscX0-unsplash_1080x.jpg?v=1623610096" alt="" />

                        <label htmlFor="fileInput">
                            <i className="replaceImg fa-solid fa-user"></i>
                        </label>
                        <input type="file" id='fileInput' style={{display: "none"}} />
                        </div>

                    <label> USERNAME</label>
                    <input type="text" placeholder='Ndhlovu1' />
                    <label> FIRSTNAME</label>
                    <input type="text" placeholder='Tinomudaishe' /> 
                    <label> SURNAME</label>
                    <input type="text" placeholder='Ndhlovu' />
                    <label> EMAIL</label>
                    <input type="email" placeholder='tin@example.com' />
                    <label> Password</label>
                    <input type="password" placeholder='123Pwd!'/>
                    <button className="settingBtn">
                        UPDATE
                    </button>





                </form>

        </div>
            

        <Sidebar/>
    </div>
  )
}

export default Settings
