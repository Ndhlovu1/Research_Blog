import React from 'react'
import "./post.css"


function Post1() {
    return (
        <div className='post'>
         <img className='postImg' src='https://bigdataconference.eu/wp-content/uploads/2022/07/73082809_2498791716873889_9191111171694919680_n.jpg' alt='Future'/>
        <div className="postInfo">
          <div className="postIntros">
          <span className='postIntro'>ETHICAL CHALLENGES</span>
          <span className='postIntro'>CLOUD COMPUTING</span>
          </div>
    
          <span className='postTitle'> THE DATA CONFERENCE</span>
          <hr/>
          <span className='postDate'>1 hour ago</span>
        </div>
        <p className='postDescription'>
        Conference brings together developers, IT professionals and users to share their experience, 
        discuss best practices, describe use cases and business applications related to their successes. 
        The event is designed to educate, inform and inspire – organized by people who are passionate about Big Data and Data Exploration. 
        We look forward to seeing you there!
        </p>
    
        </div>
      )
}

export default Post1



