import React from 'react';

export default function NavLink({ text, tabIndex, href, className }) {
  return (
    <a
      className = {'ml-4 hover:opacity-75 active:opacity-50 ' + className}
      target='_blank'
      aria-label={text + ' - Opens in a new window'}
      tabIndex={tabIndex}
      href={href}
      rel='noreferrer'
    >
      {text}
    </a>
  )
}