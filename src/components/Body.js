import React from 'react';

export default function Body({ children }) {
  return (
    <main id='main' className='bg-white max-w-7xl m-auto p-4'>
      {children}
    </main>
  )
}