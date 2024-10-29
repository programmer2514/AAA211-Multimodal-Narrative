import React, { useRef } from 'react';

export default function Image({ src, alt, caption, className }) {

  const image = useRef();
  
  function openFullscreen() {

  }

  return (
    <div className={className}>
      <a onClick={openFullscreen} ref={image}>
        <img
          className='rounded-xl'
          src={src}
          alt={alt}
        />
      </a>
      <p className='italic text-center text-base'>
        {caption}
      </p>
    </div>
  )
}