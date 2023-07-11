import React from 'react'
import getWikiResults from '@/lib/getWikiResults'
import Item from './components/Item'

type Props = {
    params: {
        searchTerm: string
    }
}


export async function generateMetadata({params: {searchTerm }}: Props) {
    const wikiData: Promise<SearchResult> = getWikiResults(searchTerm)
    const data = await wikiData
    const displayTerm = searchTerm.replaceAll('%20', ' ')

    if (!data?.query?.pages) {
    return {
        title: `${displayTerm} not found`
        }
    }    
    return {
        title: `${displayTerm}`,
        description: `Search results for ${displayTerm}`
        }
}

//JSON.stringify(result)

export default async function SearchResults({params: { searchTerm }}: Props) {
    const wikiData: Promise<SearchResult> = getWikiResults(searchTerm)
    const data = await wikiData
    const results: Result[] | undefined = data?.query?.pages

    const content = (
        <main>
            {results
            ? Object.values(results).map((result) => {
                return <Item key={result.pageid} result={result} />
            })
            : <h2>{`${searchTerm} not found`}</h2>
            }
        </main>
    )

    return content

      
}