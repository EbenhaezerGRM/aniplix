"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { getRecent } from '@app/libs/getRecent'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'
import { MdPlaylistAdd } from 'react-icons/md'
import { MdLanguage } from 'react-icons/md'

export default function recentPage() {
  const [recent, setRecent] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [type, setType] = useState(1)

  useEffect(() => {
    fetchRecent(currentPage, type)
}, [currentPage, type])

  async function fetchRecent(page, type) {
    const recentResults = await getRecent(page = page, type = type)
    setRecent(recentResults)
  }

  function handleNextPage() {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  function handlePreviousPage() {
    setCurrentPage((prevPage) => prevPage - 1)
  }

  function handleSubPage(){
    setType(1)
  }

  function handleDubPage(){
    setType(2)
  }

  function handleChinesePage(){
    setType(3)
  }


  return (
    <div className="componentSpacing">
      <div className="flex-center gap-4">
        <MdPlaylistAdd size={40} />
        <div>
          <p className="font-bold text-xl">Recently Updated</p>
        </div>
      </div>

      <div className='flex-center flex-wrap w-full gap-3 bg-slate-900 p-3 rounded-lg mt-4'>
        <MdLanguage
          size={30}
          />
        <button 
          className='bg-teal-500 text-slate-900 rounded-lg p-1 disabled:bg-gray-400 disabled:cursor-not-allowed'
          onClick={handleSubPage}
          disabled={type === 1}
          >
          Sub
        </button>

        <button 
          className='bg-teal-500 text-slate-900 rounded-lg p-1 disabled:bg-gray-400 disabled:cursor-not-allowed'
          onClick={handleDubPage}
          disabled={type === 2}
          >
          Dub
        </button>

        <button 
          className='bg-teal-500 text-slate-900 rounded-lg p-1 disabled:bg-gray-400 disabled:cursor-not-allowed'
          onClick={handleChinesePage}
          disabled={type === 3}
          >
          Chinese 
        </button>

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

      {recent.map((result) => (
        <div className='mt-4 rounded-lg hover:bg-gray-800'>
          <Link
            href={result.episodeUrl}
            >
            <div className='flex'>
              <Image
                className='rounded-lg w-24 lg:w-48'
                src={result.animeImg}
                alt={result.animeTitle || result.animeId}
                width={200}
                height={200}
                />
              <div className='px-4'>
                <p className='font-bold lg:text-xl mb-2'>{result.animeTitle || result.animeId}</p>
                <p className='my-2'>Episode: {result.episodeNum.toLowerCase()}</p>
                <span className='mb-2 bg-teal-500 text-slate-900 p-1 rounded-lg'>{result.subOrDub}</span>
              </div>
            </div>
            </Link>
          </div>
      ))}
    </div>
  )
}