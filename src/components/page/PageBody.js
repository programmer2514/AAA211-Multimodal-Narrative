import React from 'react';

import PageHeader from './PageHeader';

export default function PageBody({ setPage, title, children }) {
  return (
    <main className='bg-white fixed w-[80rem] max-w-[calc(100vw-4rem)] h-[calc(100vh-4rem)] top-[2rem] rounded-2xl z-50 left-1/2 -translate-x-1/2 overflow-hidden flex flex-col'>
      <PageHeader
        title={title}
        setPage={setPage}
      />
      <div id='page' className='p-8 text-xl flex-grow overflow-scroll'>
        {children}
      </div>
    </main>
  )
}