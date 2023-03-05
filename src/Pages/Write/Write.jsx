import React from 'react'
import './write.css'

function Write() {
  return (
    <div className='write'>
        <img 
            className='createImage'
            src='https://kenzie.snhu.edu/wp-content/uploads/2020/07/AdobeStock_292974473-1400x933.jpeg'
            alt='ima'
        />
        <form className='writeForm'>
            <div className="writeFormGroup">
                <label htmlFor='fileInput'>
                    <i className=" writeIcon fa-solid fa-file"></i></label>
                <input type="file" id='fileInput' style= {{display:"none"}} />
                <input type="text" placeholder='Enter Name of Submission' className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea 
                    placeholder='Please Write a details about your thesis ...'
                    className='writeInput writeText'
                    >
                </textarea>
            </div>
            <button className='writeSubmit'>GO LIVE!</button>

        </form>
    </div>
  )
}

export default Write





