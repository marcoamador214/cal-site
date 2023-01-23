import React from 'react';
import { images } from './constants/images'

function SubHeading({ title }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <p className='p__cormorant'>{title}</p>
    </div>
  )
}

export default SubHeading;