import Image from 'next/image'
import Link from 'next/link'
import { getTrending } from '@app/libs/getTrending'
import { HiTrendingUp } from 'react-icons/hi'
import { BsArrowRight } from 'react-icons/bs'

export default async function Trending() {
  const trending = await getTrending()  

  return (
    <div className='componentSpacing'>
      <Link href='/trending' className='flex-center bg-slate-900 hover:bg-gray-800 p-3 rounded-lg'>
        <div className='flex-center gap-2 font-bold'>
          <HiTrendingUp size={30} />
          Trending
        </div>
        <div className='flex ml-auto'>
          <BsArrowRight size={25} />
        </div>
      </Link>

      <div className='mt-4 grid grid-cols-2 lg:grid-cols-5 gap-4'>
        {trending.map((result, index) => (
          <div key={result.animeTitle} className='bg-slate-900 hover:bg-gray-800 rounded-lg overflow-hidden'>
            <Link target="_blank" href={result.animeUrl} className='flex flex-col'>
              <div className='relative'>
                <Image
                  className='object-cover w-full h-32 lg:h-48'
                  src={result.animeImg}
                  alt={result.animeTitle || result.animeId}
                  width={200}
                  height={200}
                />
                <div className="absolute top-2 left-2 flex-center justify-center w-8 h-8 bg-teal-500 rounded-full">
                  <span className="font-bold text-slate-900">{index + 1}</span>
                </div>
              </div>
              <div className='w-full p-2'>
                <p className='lg:text-md font-bold '>{result.animeTitle || result.animeId}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
