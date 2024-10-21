import React from 'react';

export default function Card({ title, image, onClick }) {
  return (
    <div className='inline-block rounded-2xl w-96 h-64 overflow-hidden m-4 drop-shadow-md hover:drop-shadow-sm hover:translate-y-0.5 active:drop-shadow-none active:translate-y-1 portrait:w-72 portrait:h-48'>
      <a href={'#' + title.replaceAll(' ', '')} onClick={onClick}>
        <div className='text-white text-center absolute w-96 h-64 p-6 flex flex-col justify-center items-center portrait:w-72 portrait:h-48'>
          <h3 className='text-3xl font-semibold mb-3' style={{filter: 'drop-shadow(0 0 24px rgb(0 0 0 / 1)) drop-shadow(0 0 32px rgb(0 0 0 / 1))'}}>{title}</h3>
        </div>
        <img className='h-full' src={image}></img>
      </a>
    </div>
  )
}