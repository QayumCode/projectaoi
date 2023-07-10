import React from 'react'
import { Typewriter } from 'react-simple-typewriter'

const Typerwiter = () => {
  return (
    <div>
        {/* <h2 className='toptext'>About Me</h2> */}
     <div className='dis'>
        <h2 className='text'>
            Hi, I'm  <span className='name'>Jone Lee</span><br/> a{" "} 
        <span className='words'>
            <Typewriter 
            words={["Student", "Web Developer", "Designer", "Apps Development"]}
            loop={true}
            cursor 
            cursorStyle="|"
            typeSpeed={200}
            deleteSpeed={100}
             />
        </span>
        <p className='pra'>I am a front-end web developer. I can provide  clean and pixl perfect
      design. I also make the website more & more  interactive with web animation.
      I can provide clean code and pixel perfcet dwsign. I also makr the website
      more & more interctice  with web animation.A respsive design make your
      website accessile to all users, regardles of their device.</p>
      <button className="btn-1">Read More</button>
      <button className="btn-2">Click Me</button>
      </h2>
      <img src="https://clipart-library.com/new_gallery/47-475721_transparent-happy-person-png-png-download-happy-men.png" alt="" />
     </div>
     
    </div>
  )
}

export default Typerwiter
