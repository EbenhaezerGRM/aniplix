"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { getTrending } from '@app/libs/getTrending'
import { HiTrendingUp } from 'react-icons/hi'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'

export default function TrendingPage() {
  const [trending, setTrending] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetchTrending(currentPage)
}, [currentPage])

  async function fetchTrending(page) {
    const trendingResults = await getTrending(page)
    setTrending(trendingResults)
  }

  function handleNextPage() {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  function handlePreviousPage() {
    setCurrentPage((prevPage) => prevPage - 1)
  }

  return (
    <div className="componentSpacing">
      <div className="flex-center gap-4">
        <HiTrendingUp size={40} />
        <div>
          <p className="font-bold text-xl">Trending Anime</p>
        </div>
      </div>

      <div className='flex-center w-full gap-3 bg-slate-900 p-3 rounded-lg mt-4'>
        <p className=''>Trending Ongoing Update</p>
        <div className="flex-center ml-auto">
          <button
            className="pageButton"
            disabled={currentPage === 1}
            onClick={handlePreviousPage}
            > 
            <AiFillCaretLeft/>
          </button>
          <p className='px-4'>{currentPage}</p>
          <button
            className="pageButton"
            onClick={handleNextPage}
            >
            <AiFillCaretRight/>
          </button>
        </div>
      </div>

      {trending.map((result) => (
        <div className='mt-4 rounded-lg hover:bg-gray-800'>
          <Link
            href={result.animeUrl}
            >
            <div className='flex'>
              <Image
                className='rounded-lg w-24 lg:w-48 object-cover'
                src={result.animeImg}
                alt={result.animeTitle || result.animeId}
                width={200}
                height={200}
                />
              <div className='px-4'>
                <p className='font-bold lg:text-xl'>{result.animeTitle}</p>
                <p className='my-2'>{result.latestEp}</p>
                <div className='flex flex-wrap'>
                {result.genres.slice(0, 6).map((genre) => (
                    <span className="rounded-lg mt-2 mr-2 bg-teal-500 text-slate-900 p-1">
                      {genre.split(' ')[0]}
                    </span>
                ))}
                </div>
              </div>
            </div>
            </Link>
          </div>
      ))}
    </div>
  )
}