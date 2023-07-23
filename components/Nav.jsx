"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { HiTrendingUp } from 'react-icons/hi'
import { MdPlaylistAdd } from 'react-icons/md'
import { RiCompassDiscoverLine } from 'react-icons/ri'
import { TiTimes } from 'react-icons/ti'

const Nav = () => {
  const [searchBar, setSearchBar] = useState(false)
  const toggleSearchBar = () => {
    setSearchBar(!searchBar)
  }

  return (
    <nav className="bg-slate-900 py-4 px-6 fixed top-0 left-0 right-0 z-50">
      <div className="flex-center justify-between">

        {!searchBar && (
        <Link href="/" className="flex-center font-bold text-2xl">
          <Image src="/assets/icons/aniplixIcon.svg" alt="aniplix" width={40} height={40}/>
          <p>aniplix</p>
        </Link>
        )}

        
        <div className="w-1/2 mx-auto bg-teal-500 rounded-lg pr-1 gap-1 flex-center max-lg:hidden">
          <input
            type="text"
            placeholder="Search Anime..."
            className="rounded-lg py-2 px-4 w-full focus:outline-none text-slate-900"
            id='search'
          />
          <AiOutlineSearch
            size={25}
            color='#0f172a'
            className='cursor-pointer'
            />
        </div>
        
        {searchBar && (
          <div className="bg-teal-500 rounded-lg pr-1 gap-1 flex-center lg:hidden w-4/5 mx-auto">
            <input
              type="text"
              placeholder="Search Anime..."
              className="rounded-lg py-2 px-4 w-full focus:outline-none text-slate-900"
              id='search'
            />
            <AiOutlineSearch
              size={25}
              color='#0f172a'
              className='cursor-pointer'
              />
          </div>
        )}

        <div className='lg:hidden'>
          {searchBar ? (
            <TiTimes
              size={30}
              className='cursor-pointer'
              onClick={toggleSearchBar}
              />
          ) : (
            <AiOutlineSearch
              size={30}
              className='cursor-pointer'
              onClick={toggleSearchBar}
              />
          )}
        </div>
        
        <div className='flex-center max-lg:hidden'>
          <Link href="/trending" className="text-md ml-4 flex-center gap-1">
            <HiTrendingUp
              size={30}
              />
              Trending
          </Link>
          <Link href="/recent" className="text-md ml-4 flex-center gap-1">
            <MdPlaylistAdd
              size={30}
              />
              Recents
          </Link>
          <Link href="/discover" className="text-md ml-4 flex-center gap-1">
            <RiCompassDiscoverLine
              size={30}
              />
              Discover
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav