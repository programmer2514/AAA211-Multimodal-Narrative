import React from 'react';

export default function NavLink({ text, href, className }) {
  return (
    <a
      className={'ml-4 hover:opacity-75 active:opacity-50 ' + className}
      target='_blank'
      href={href}
      rel='noreferrer'
    >
      {text}
    </a>
  )
}