import React from 'react'
import Post from '../Post/Post'
import Post1 from '../Post/Post1'
import Post2 from '../Post/Post2'
import Post3 from '../Post/Post3'
import Post4 from '../Post/Post4'
import './posts.css'

function Posts() {

// VISIT THE FOLDERS FOR THE ./Post to create or edit any new posts

  return (
    // THE CUSTOM posts className will be used to determine how our posts will appear
    
    <div className='posts'>
        <Post/>
        <Post1/>
        <Post2/>
        <Post3/>
        <Post4/>
    </div>
  )
}


export default Posts



