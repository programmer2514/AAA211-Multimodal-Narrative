import React from 'react';

export default function Header({ title, setPage }) {
  return (
    <div className='bg-gray-200 sticky top-0 min-w-full drop-shadow-sm z-10 portrait:static'>
      <div className='flex items-center max-w-7xl m-auto px-6 py-4 portrait:flex-col'>
        <h1 className='font-bold text-3xl portrait:text-center'>
          {title}
        </h1>
        <span className='grow portrait:pt-2' role='none' />
          <a
            className = {'ml-4 hover:opacity-75 active:opacity-50'}
            href='#'
            onClick={() => { setPage('') }}
          >
            Back to Main Page
          </a>
      </div>
    </div>
  )
}