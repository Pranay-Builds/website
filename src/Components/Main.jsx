import React from 'react'
import webIcon from '../assets/WebIcon.png'
import { Link } from 'react-router-dom'

function Content() {
  return (
    <div>
        <div className='flex justify-content-center align-items-center'>
        <h1 className='mt-2 text-center'>Pranay</h1>
        <p className='text-muted text-center'>Hey! My name is Pranay. I am a guy interested in Coding, Game Development, Gaming, Making Youtube Videos and Reading Books</p>

        <div className="d-flex flex-column justify-content-center align-items-center mt-3">
        <img 
          src={webIcon} 
          alt="Profile Picture"
          style={{ width: '150px', height: '150px' }}
          className="rounded-circle" 
        />
        <p className='mt-2 text-muted'>This is my profile picture which I got from Copilot and I really like it</p>
      </div>
        </div>

        <div className="text-center mt-3">
        <p>I have been learning React and I am building this website in React for some practice for my front end skills before moving into backend.</p>
        <ul>
            <li>Stuff I know</li>
            <li>HTML, CSS</li>
            <li>Javascript</li>
            <li>React</li>
            <li>C</li>
            <li>Python</li>
            <li>Tailwind</li>
            <li>Django</li>
            <li>Basics of MERN</li>
            <li>Python</li>
            <li>Lua - Roblox Game Development</li>
        </ul>

        <p>I have been currently doing CS50 and I am loving it. I am also learning Python and I am really enjoying it.</p>
        <p>I have built some projects like Compound Intereset Calculator, Weather App, To Do List, 
          and many more in Javascript and React.
        </p>

        <p>I also create Games on Roblox. I will learn basic 3d blender modeling before making and releasing my own games.</p>

      
        <p className='m-0'>Other Link:
          <a href="https://roblox.com/users/3258981823" target='_blank' rel='noreferrer noopener'>Roblox</a>
        </p>


      </div>
    </div>
  )
}

export default Content
