import React from 'react'
import Card from './card'

export default function Results({results}) {
  return (
    <div>
      {results.map(result=>(
        <Card key={result.id} result={result}></Card>
      ))}
    </div>
  )
}
