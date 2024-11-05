'use client'

import * as React from 'react'

interface FruitCardProps {
  key?: string
  content: string
  children: React.ReactNode
}
export default function FruitCard({ key, content, children }:FruitCardProps) {
  return (
    <li
      key={key}
      className="inline-flex items-center  space-x-2 shadow-lg rounded-lg p-6 bg-white text-neutral-800"
    >
      {' '}
      <div >
        {children}
      </div>
      <span className="text-4xl font-bold w-full text-center" >
        {content}
      </span>
      {' '}

    </li>
  )
}
