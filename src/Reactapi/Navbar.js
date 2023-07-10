import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faBlog, faBusinessTime, faHome, faServer, faClose, faBars } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react'
// import Silder from './Silder'
// import Typerwiter from './Typerwiter'
import Blog from './Blog'

const Navbar = () => {
    const navRef = useRef()

    const handleClick = () => {
        navRef.current.classList.toggle("responsive-nav")
    }

    const handledelete  = () => {
      localStorage.clear("Signup")
      window.location.reload()
    }
  return (
    <div>
      <header>
        <div className='logo'>HGI</div>
        <nav ref={navRef}>
        <a href="home"><FontAwesomeIcon icon={faHome} /> Home</a>
        <a href="about"><FontAwesomeIcon icon={faAddressBook} /> About</a>
        <a href="blog"><FontAwesomeIcon icon={faBlog} /> Blog</a>
        <a href="services"><FontAwesomeIcon icon={faServer} /> Services</a>
        <a href="business"><FontAwesomeIcon icon={faBusinessTime} /> Business</a>
           <button className='nav-btn nav-close-btn' onClick={handleClick}><FontAwesomeIcon icon={faClose} /></button>
        </nav>
        <button className='nav-btn nav-open-btn' onClick={handleClick}><FontAwesomeIcon icon={faBars} /></button>
        <button className='login' onClick={handledelete}>login</button>
      </header>
     
      {/* <Typerwiter />
       <Silder /> */}
       <Blog />
    </div>
  )
}

export default Navbar
