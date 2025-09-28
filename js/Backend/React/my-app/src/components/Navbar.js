import React from 'react'
// import Footer from './Footer'

const Navbar = (props) => {
  return (
    <div>
      <div className="logo">{props.logoText}</div>
        
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
        
       
    </div>
  )
}

export default Navbar