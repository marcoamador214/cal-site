import React from 'react';

import SubHeading from './SubHeading';
import images from './constants/images';
import './Header.css';

function Header() {
  return (
    <div className='header app__wrapper app__padding' id='home'>
      <div className='app__wrapper_info header_info'>
        <SubHeading title='CalBearsFball,'/>
        <h1 className='header-h1'>Your #1 source for Cal Football content</h1>
        <p className='p__opensans' style={{ margin: '2rem 0'}}>500+ posts, 3000+ followers</p>
        <button type='button' className='custom__button'>Explore ⬇️</button>
      </div>
      <div className='app__wrapper_img'>
        <img className='header_img' src={images.Myles} alt='Myles Williams'/>
      </div>
    </div>
  )
}

export default Header;