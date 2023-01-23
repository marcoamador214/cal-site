import React from 'react';

import SubHeading from './SubHeading';
import { images, data } from './constants';
import './Awards.css';

function AwardCard({ award }) {
  return (
    <div className='app__laurels_awards-card'>
      {/* <img clasName='award_img' src={award.imgUrl} alt='award'/> */}
      <div className='app__laurels_awards-card_content'>
        <p className='p__cormorant' style={{ color: '#DCCA87'}}>{award.title} 🏆</p>
        <p className='p__cormorant'>{award.subtitle}</p>
        <img className='player_image' src={award.image} alt="this is an image"/>
      </div>
    </div>
  )
}

function Awards() {
  return (
    <div className='app__wrapper' id='awards' style={{ background: 'var(--color-black)', paddingLeft: '45px'}}>
      <div className='app__wrapper_info'>
        <SubHeading title='2022' />
        <h1 className='headtext__cormorant' style={{ paddingTop:'45px'}}>Players of the Season</h1>
        <div className='app__laurels_awards'>
          {data.awards.map((award) => <AwardCard award={award} key={award.title}/>)}
        </div>
      </div>
      <div className='app__wrapper_img'>
      </div>
    </div>
  )
}

export default Awards;