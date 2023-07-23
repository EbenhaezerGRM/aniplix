import Image from "next/image"
import Link from "next/link"
import { getPopular } from "@app/libs/getPopular"
import { AiFillTrophy } from 'react-icons/ai'

export default async function Popular() {
  const popular = await getPopular()  

  return (
    <div className="flex justify-center mt-8 max-md:px-4">
      <div className="lg:w-3/4">
        <div className="flex-center gap-2 bg-slate-900 rounded-lg p-3 font-bold justify-center">
          <AiFillTrophy
            size={30}
            />
          <p>Popular Anime</p>
        </div>

        <div className="mt-4">
          {popular.slice(0, 10).map((result) => (
            <div key={result.animeId} className="rounded-lg bg-slate-900 mt-2 overflow-hidden hover:bg-gray-800">
              <Link 
                href={result.animeUrl}
                >
                <div className="flex">
                  <Image
                    className="w-16"
                    src={result.animeImg}
                    alt={result.animeTitle || result.animeId}
                    width={150}
                    height={150}
                    />
                  <div className="p-4">
                    <p className="lg:text-md font-bold mb-2">{result.animeTitle || result.animeId}</p>
                    <p className="text-sm mt-2">{result.releasedDate}</p>
                  </div>
                </div>

              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}