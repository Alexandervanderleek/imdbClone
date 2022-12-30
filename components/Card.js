import React from 'react'
import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/outline';

export default function Card({result}) {
    const base_url = "https://image.tmdb.org/t/p/original"
  return (
    <div>
        <Image
        layout='responsive'
        src={base_url+result.backdrop_path}
        width={200}
        height={100}
        ></Image>
    <div className="">
        <p className='truncate'>{result.overview}</p>
        <h2>{result.title || result.name}</h2>
        <p>{result.release_date || result.first_air_date}
            <ThumbUpIcon className='h-5'/>
            {result.vote_count}
        </p>
    </div>
    </div>
  )
}
