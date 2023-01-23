import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import SubHeading from './SubHeading';
import images from './constants/images';
import './Gallery.css';

function Gallery() {
const scrollRef = React.useRef(null)

const scroll = (direction) => {
  const { current } = scrollRef;

  if (direction === 'left') {
    current.scrollLeft -= 300;
  }
  else {
    current.scrollLeft += 300;
  }
}

  return (
    <div className='app__gallery flex__center'>
      <div className='app__gallery-content'>
        <SubHeading title='Instagram'/>
        <h1 className='headtext__cormorant'>Latest Posts</h1>
        <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem'}}>Lorem Ipsum Dolor</p>
        <button type='button' className='custom__button'>View More</button>
      </div>
      <div className='app__gallery-images'>
        <div className='app__gallery-images-container' ref={scrollRef}></div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')}/>
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')}/>
        </div>
      </div>
    </div>
  )
}

export default Gallery;