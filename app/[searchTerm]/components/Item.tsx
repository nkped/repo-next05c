import React from 'react'
import Link from 'next/link'


type Props = {
    result: Result
}

export default function Item({ result }: Props) {


  return (
    <div>
        <h2>
            <Link href={`https://en.wikipedia.org/?curid=${result.pageid}`} target='_blank' >{result.title}</Link>            
        </h2>
        <p>{result.extract}</p>
    </div>
  )
}