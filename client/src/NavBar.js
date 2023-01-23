import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import images from './constants/images'


function NavBar ({currentUser,setCurrentUser}){

    function handleLogOutClick(){
        fetch("/logout", {method:"DELETE"}).then((r)=>{
            if(r.ok){
                setCurrentUser(null);
            }
        })
    }

    return (
        <nav className='app_navbar'>
          <div className='navbar_logo'>
            <a href='https://www.instagram.com/calbearsfball/?hl=en'>
              <img className='navbar_image' src={images.CalbearsFball} alt='logo'/>
            </a>
          </div>
          <ul className='navbar_links'>
            <li className='p__opensans'>Home</li>
            <li className='p__opensans'>Roster</li>
            <li className='p__opensans'>Schedule</li>
            <li className='p__opensans'>Questions</li>
          </ul>
          <div className='navbar_login'>
            <a className='p__opensans' style = {{ cursor: 'pointer' }} onClick={handleLogOutClick}>Log Out</a>
          </div>
        </nav>
      )}
    

export default NavBar;