import React from 'react';

export default function Body({ children }) {
  return (
    <div className='bg-white max-w-7xl m-auto p-4'>
      {children}
    </div>
  )
}