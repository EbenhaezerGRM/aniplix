import Image from 'next/image'
import Link from 'next/link'
import { getRecent } from '@app/libs/getRecent'
import { MdPlaylistAdd } from 'react-icons/md'
import { BsArrowRight } from 'react-icons/bs'

export default async function Recent() {
  const recent = await getRecent()

  return (
    <div className='componentSpacing'>
      <Link href='/recent' className='flex-center bg-slate-900 hover:bg-gray-800 p-3 rounded-lg'>
        <div className='flex-center gap-2 font-bold'>
          <MdPlaylistAdd size={30} />
          Recently Updated
        </div>
        <div className='flex ml-auto'>
          <BsArrowRight size={25} />
        </div>
      </Link>

      <div className='mt-4 grid grid-cols-2 lg:grid-cols-5 gap-4'>
        {recent.slice(0, 10).map(result => (
          <div key={result.animeTitle} className='bg-slate-900 hover:bg-gray-800 rounded-lg overflow-hidden'>
            <Link target="_blank" href={result.episodeUrl} className='flex flex-col'>
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
                  <p className='text-sm'>{`Episode: ${result.episodeNum}`}</p>
                </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
