import React, {useState} from 'react'
import { FaBars, FaTimes} from 'react-icons/fa'
import './Header.css'

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <div>
      <header className='navbar'>
        <h2 className='logo'>BUMA</h2>
        <nav className={isMobile ? 'nav-link-mobile' : 'nav-links'}>
            <ul>
                <li><a href='#service'>Services</a></li>
                <li><a href='#resources'>Resources</a></li>
                <li><a href='#company'>Company</a></li>
                <li><a href='#contact'>Contact</a></li>
            </ul>
            <div className='headerbuttons'>
            <button className='loginBtn'>Log in</button>
            <button className='SignupBtn'>Sign up</button>
        </div>
        </nav>
        <button className='mobile-menu-icon' onClick={toggleMobileMenu}> {isMobile ? <FaTimes /> : <FaBars />}</button>
      </header>
    </div>
  )
}

export default Header;