"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { getDiscover } from '@app/libs/getDiscover'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import { RiCompassDiscoverLine } from 'react-icons/ri'
import { AiFillFilter } from 'react-icons/ai'

export default function discoverPage () {
  const [discover, SetDiscover] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetchDiscover(currentPage)
}, [currentPage])

async function fetchDiscover(page) {
  const trendingResults = await getDiscover(page)
  SetDiscover(trendingResults)
}

function handleNextPage() {
  setCurrentPage((prevPage) => prevPage + 1)
}

function handlePreviousPage() {
  setCurrentPage((prevPage) => prevPage - 1)
}

  return (
    <div className='componentSpacing'>
      <div className='flex-center gap-4'>
        <RiCompassDiscoverLine size={40} />
        <div>
          <p className='font-bold text-xl'>Discover</p>
        </div>
      </div>

      <div className='mt-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
        <div className='flex flex-wrap'>
          <input
            placeholder='Search...'
            className='rounded-md focus:outline-none text-slate-900 py-2 px-4 w-full'
          />
        </div>

        <div className='py-2 px-4 bg-slate-900 rounded-md items-center flex font-bold'>
          Genre
        </div>

        <div className='py-2 px-4 bg-slate-900 rounded-md items-center flex font-bold'>
          Language
        </div>

        <div className='py-2 px-4 bg-slate-900 rounded-md items-center flex font-bold'>
          Status
        </div>

        <button className='py-2 px-4 bg-teal-500 rounded-md items-center flex font-bold text-slate-900 gap-2 justify-center'>
          Filter
          <AiFillFilter />
        </button>

        <div className='flex justify-center items-center'>
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

      {discover.map((result) => (
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
                <p className='my-2'>{result.releasedDate}</p>
              </div>
            </div>
            </Link>
          </div>
      ))}
    </div>
  )
}
