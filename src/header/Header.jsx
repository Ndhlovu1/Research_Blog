import React from 'react'
import "./header.css"

function Header() {
  return (
    <div className="header">
        <div className="headerTitles">
            <span className='headerTitleSm'>Review and Submit your Papers for the Summit</span>
            <span className='headerTitleLg'>NDHLOVU TECH SUMMIT</span>
        </div>
        <img className='headerImage' src='https://cdn.shopify.com/s/files/1/0576/4943/0736/files/alexandre-pellaes-6vAjp0pscX0-unsplash_1080x.jpg?v=1623610096' alt='Header Image'/>


    </div>
  )
}

export default Header
