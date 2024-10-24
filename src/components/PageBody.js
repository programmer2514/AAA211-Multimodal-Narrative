import React from 'react';

export default function PageBody({ setPage, title, children }) {
    return (
      <>
        <a
          href='#'
          className='fixed top-0 left-0 bottom-0 right-0 z-40 bg-black opacity-80'
          onClick={() => { setPage('') }}
          aria-label='Back to main page'
        ></a>
        <main className='bg-white fixed w-[80rem] max-w-[calc(100vw-4rem)] h-[calc(100vh-4rem)] p-4 top-[2rem] rounded-2xl z-50 left-1/2 -translate-x-1/2'>
          {title}
          {children}
        </main>
      </>
    )
  }