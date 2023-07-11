'use client'

import React from 'react'
import { useState, FormEvent } from 'react'
import { useRouter } from 'next/navigation'

export default function Search() {
    const [ search, setSearch ] = useState('')
    const router = useRouter()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        router.push(`/${search}/`)
        setSearch('')
    }


  return (
    <form onSubmit={handleSubmit} >
        <input 
            type='text' 
            placeholder='search' 
            value={search} 
            onChange={(e) => e.target.value}
            />
        <button>{'->'} </button>
    </form>
  )
}
