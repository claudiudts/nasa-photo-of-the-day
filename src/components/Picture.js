import React from 'react';

export default function Picture({title, photo, date, info}) {
  if(!photo) return <h3>Loading...</h3>;

  return(
    <div className="image">
      <div className='image-container'>
        <h2>{title}</h2>
        <img src={photo} alt="Daily Photo from Nasa" />
      </div>
      <div className='photo-info'>
        <p>{date}</p>
        <p>{info}</p>
      </div>
    </div>
  )
}