import React from 'react'
import "./post.css"

function Post() {
  return (
    <div className='post'>
     <img className='postImg' src='https://cdn-az.allevents.in/events5/banners/22e198a4a35669a676525bae2b55f8097728b484d3dbc00a929fd35bc70f4ca7-rimg-w1200-h666-gmir.jpg?v=1660921101' alt='Future'/>
    <div className="postInfo">
      <div className="postIntros">
      <span className='postIntro'>BLOCKCHAIN</span>
      <span className='postIntro'>CYBERSECURITY</span>
      <span className='postIntro'>CLOUD COMPUTING</span>
      </div>

      <span className='postTitle'> THE BLOCKCHAIN SUMMIT</span>
      <hr/>
      <span className='postDate'>3 days ago</span>
    </div>
    <p className='postDescription'>
      This conference promises to be a high-quality international platform which brings together researchers and practitioners from academia and industry to discuss 
      cutting-edge research on Computer Science, Data Science, Informatics, Business Information, Teaching and Learning Technologies,
      Computational Mathematics and ICT. The conference will expose participants to the most current and recent developments in particular interdisciplinary areas.

      Authors are invited to submit unpublished work for possible presentation at the conference of which new/novel idea papers are 
      particularly encouraged. Submitted papers will undergo double-blind peer reviews to ensure that only high-quality papers are admitted to enhance interesting 
      and thought-provoking sessions at the conference.

      Accepted papers will be published in IEEE Xplore Digital Library. Due to the COVID-19 pandemic restrictions on movement, 
      the 3rd IMITEC conference will be held virtually. Delegates and other conference attendees will be given the virtual conference link in due course.

    </p>

    </div>
  )
}

export default Post


