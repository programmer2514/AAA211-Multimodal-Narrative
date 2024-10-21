import React from 'react';

export default function Footer({ year, holder, links, children }) {
  return (
    <div className='bg-gray-200 drop-shadow-sm fixed bottom-0 min-w-full portrait:static'>
      <div className='text-black flex items-center max-w-7xl m-auto p-4 portrait:flex-col'>
        <p className=''>Copyright &copy; {year} {holder}</p>
        <span className='grow' />
        <div className='flex opacity-25'>{children}</div>
        <span className='grow' />
        {links}
      </div>
    </div>
  )
}