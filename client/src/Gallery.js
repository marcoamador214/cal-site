import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import SubHeading from './SubHeading';
import { images } from './constants';
import './Gallery.css';
import InstagramEmbed from 'react-instagram-embed';

const galleryImages = [images.Post1, images.Post2, images.Post4, images.Post5]

function Gallery() {
const scrollRef = React.useRef(null);

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
        <SubHeading title='@calbearsfball'/>
        <h1 className='headtext__cormorant'>Latest IG Posts 📲</h1>
        <p className='p__opensans' style={{ color: '#AAA', marginTop: '2rem'}}>Go Bears!</p>
        <button type='button' className='custom__button'>View More</button>
      </div>
      <div className='app__gallery-images'>
        <div className='app__gallery-images_container' ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className='app__gallery-images_card flex__center' key={`gallery_image-${index + 1}`}>
              <img src={image} alt='post'/>
              <a className='gallery__image-icon' href='https://www.instagram.com/p/CnkUggAv8yh/?hl=en'>
                <BsInstagram className='gallery__image-icon'/>
              </a>
            </div>
          ))}
        </div>
        <div className='app__gallery-images_arrows'>
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={() => scroll('left')}/>
          <BsArrowRightShort className='gallery__arrow-icon' onClick={() => scroll('right')}/>
        </div>
      </div>
    </div>
  )
}

export default Gallery;