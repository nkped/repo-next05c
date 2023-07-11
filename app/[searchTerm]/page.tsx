import React from 'react'
import getWikiResults from '@/lib/getWikiResults'

type Props = {
    params: {
        searchTerm: string
    }
}


export async function generateMetadata({params: {searchTerm }}: Props) {
    const wikiData: Promise<SearchResult> = getWikiResults(searchTerm)
    const data = await wikiData
    const displayTerm = searchTerm.replaceAll('%20', '')

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



export default async function SearchResults({params: { searchTerm }}: Props) {
    const wikiData: Promise<SearchResult> = getWikiResults(searchTerm)
    const data = await wikiData
    const results: Result[] | undefined = data?.query?.pages

    const content = (
        <main>
            {results
            ? Object.values(results).map((result) => {
                return <div>
                            <h2>{result.title}</h2>
                            <p>{result.extract}</p>
                        </div>
            })
            : <h2>{`${searchTerm} not found`}</h2>
            }
        </main>
    )

    return content

      
}