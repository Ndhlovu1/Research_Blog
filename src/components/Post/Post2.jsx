import React from 'react'
import "./post.css"

function Post2() {
    return (
        <div className='post'>
         <img className='postImg' src='https://iciset.nust.na/sites/default/files/features/arch-vert.jpg' alt='Future'/>
        <div className="postInfo">
          <div className="postIntros">
          <span className='postIntro'>EMERGING TECHNOLOGIES</span>
          </div>
    
          <span className='postTitle'> THE NUST CONFERENCE</span>
          <hr/>
          <span className='postDate'>1 hour ago</span>
        </div>
        <p className='postDescription'>
       
        The International Conference on Information Systems and Emerging Technologies, to be held by the Namibia University of Science and Technology, 
        Faculty of Computing and Informatics will take place on the 23-25 November 2022. This is an international forum for researchers and practitioners to present and discuss recent innovations, trends, 
        results, experiences and concerns in the several aspects of Information Systems. The aim of the conference is to provide a platform to researchers and practitioners from academia as well as industry to meet and share cutting-edge development in the field.

        The conference programme will reflect the wide spectrum of research topics in Information Systems and Emerging technologies, building bridges between various research fields in Information Systems. In addition to the technical sessions, opportunities for the conference attendees will be the keynote talks.

        Authors are solicited to contribute to the conference by submitting articles that illustrate research results, projects, surveying works and industrial experiences that describe significant advances. 
        
        </p>
    
        </div>
      )
}

export default Post2
