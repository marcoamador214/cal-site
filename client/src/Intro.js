import React, { useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { SirmonTD } from './constants';

import './Intro.css';

function Intro() {
  const [playVideo, setPlayVideo] = useState(false)
  const vidRef = React.useRef();

  function handleClick() {
    setPlayVideo(!playVideo)

    if (playVideo) {
      vidRef.current.pause();
    }
    else {
      vidRef.current.play();
    }
  }

  return (
    <div className='app__video'>
      <h1 className='intro_heading'>Highlight of the Week</h1>
      <video
        src={SirmonTD}
        ref={vidRef}
        type="video/mp4"
        loop
        controls={false}
        />
        <div className='app__video-overlay flex__center'>
          <div className='app__video-overlay_circle flex__center' onClick={handleClick}>
            { playVideo ? (
              <BsPauseFill color='#fff' fontSize={30}/>
            ) : <BsFillPlayFill color='#fff' fontSize={30}/>}
          </div>
        </div>
    </div>
  )
}

export default Intro;
