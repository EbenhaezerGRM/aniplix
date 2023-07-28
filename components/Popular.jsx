"use client"
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from 'react'
import { getPopular } from "@app/libs/getPopular"
import { AiFillTrophy } from 'react-icons/ai'
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai'

export default function Popular() {
  const [popular, setPopular] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetchPopular(currentPage)
}, [currentPage])

  async function fetchPopular(page) {
    const popularResults = await getPopular(page)
    setPopular(popularResults)
  }

  function handleNextPage() {
    setCurrentPage((prevPage) => prevPage + 1)
  }

  function handlePreviousPage() {
    setCurrentPage((prevPage) => prevPage - 1)
  }

  return (
    <div className="flex justify-center mt-8 max-md:px-4">
      <div className=" lg:w-2/4">
        <div className="flex-center gap-2 bg-slate-900 rounded-lg p-3 font-bold justify-center">
            <AiFillTrophy
              size={30}
              />
            <p>Popular Anime</p>
          </div>

          <div className="mt-4">
            {popular.slice(0, 10).map((result, index) => (
              <div key={result.animeId} className="rounded-lg mt-2">
                <Link 
                  href={result.animeUrl}
                  >
                  <div className="flex items-center">
                    <Image
                      className="w-16 rounded-lg object-cover"
                      src={result.animeImg}
                      alt={result.animeTitle || result.animeId}
                      width={150}
                      height={150}
                      />
                    <div className="p-4">
                      <p className="lg:text-md font-bold mb-2">{result.animeTitle || result.animeId}</p>
                      <p className="text-sm mt-2">{result.releasedDate}</p>
                    </div>

                    <div className="flex ml-auto justify-end p-4">
                      <p className="bg-teal-500 text-slate-900 w-10 h-10 flex items-center justify-center rounded-lg font-bold lg:text-md">
                        {(currentPage-1)*10+index+1}
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>

        
        <div className="flex justify-center items-center mt-4">
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
      </div>
    )
  }