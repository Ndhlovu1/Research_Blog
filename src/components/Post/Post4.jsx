import React from 'react'
import "./post.css"


function Post4() {
    return (

        // CREATE THE SPECIFIC IMAGE

        <div className='post'>
             <img className='postImg' src='https://st2.depositphotos.com/3591429/6311/i/450/depositphotos_63115331-stock-photo-people-around-word-join-us.jpg' alt='Future'/>
        <div className="postInfo">
          <div className="postIntros">
          <span className='postIntro'>PRESENTATIONS </span>
          <span className='postIntro'>JOINING</span>
          </div>
    
          <span className='postTitle'> GET YOUR CONFERENCE HERE!</span>
          <hr/>
          <span className='postDate'>4 Days Ago</span>
        </div>
        <p className='postDescription'>
        THIS PLATFORM IS FOR INDIVIDUALS SUCH AS YOURSELF! CREATORS, PROJECT MANAGERS AND TECHNOLOGICAL ENTHUSIASTS
        </p>
    
        </div>
      )
}

export default Post4
