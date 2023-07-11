import React from 'react'
import Link from 'next/link'
import Search from './Search'

export default function Navbar() {
  return (
    <nav className='grid place-content-center'>
        <h1 className='grid place-content-center'>
            <Link href='/' >WikiRocket!</Link>
        </h1>
        <Search />
    </nav>
  )
}
