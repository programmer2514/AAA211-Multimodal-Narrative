import React from 'react';

export default function Header({ image, title, links }) {
  return (
    <div className='bg-gray-200 sticky top-0 min-w-full drop-shadow-sm z-10 portrait:static'>
      <div className='flex items-center max-w-7xl m-auto p-4 portrait:flex-col'>
        <a className='flex items-center' href='#'>
          <img className='w-16' src={image} />
          <h1 className='font-bold text-3xl pl-3'>{title}</h1>
        </a>
        <span className='grow' />
          {links}
      </div>
    </div>
  )
}