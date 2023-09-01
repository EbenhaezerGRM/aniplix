import Image from 'next/image'
import Link from 'next/link'
import { getDiscover } from '@app/libs/getDiscover'
import { RiCompassDiscoverLine } from 'react-icons/ri'
import { BsArrowRight } from 'react-icons/bs'

export default async function Discover() {
  const discover = await getDiscover()

  return (
    <div className='componentSpacing'>
      <Link href='/discover' className='flex-center bg-slate-900 hover:bg-gray-800 p-3 rounded-lg'>
        <div className='flex-center gap-2 font-bold'>
          <RiCompassDiscoverLine size={30} />
          Discover
        </div>
        <div className='flex ml-auto'>
          <BsArrowRight size={25} />
        </div>
      </Link>

      <div className='mt-4 grid grid-cols-2 lg:grid-cols-5 gap-4'>
        {discover.slice(0, 10).map(result => (
          <div key={result.animeTitle} className='bg-slate-900 hover:bg-gray-800 rounded-lg overflow-hidden'>
            <Link target="_blank" href={result.animeUrl} className='flex flex-col'>
              <div className='relative'>
                <Image
                  className='object-cover w-full h-32 lg:h-48'
                  src={result.animeImg}
                  alt={result.animeTitle || result.animeId}
                  width={300}
                  height={300}
                />
              </div>
                <div className='w-full p-2'>
                  <p className='lg:text-md font-bold'>{result.animeTitle || result.animeId}</p>
                  <p className='text-sm'>{`Released: ${result.releasedDate}`}</p>
                </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
