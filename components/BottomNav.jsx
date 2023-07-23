import Link from 'next/link'
import { HiTrendingUp } from 'react-icons/hi'
import { MdPlaylistAdd } from 'react-icons/md'
import { RiCompassDiscoverLine } from 'react-icons/ri'

const BottomNav = () => {
  return (

<div className="lg:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-slate-900">
    <div className="grid h-full max-w-lg grid-cols-3 mx-auto font-medium">
        <Link href="/trending" className="bottomNavButton">
            <HiTrendingUp
                size={30}
                />
            <span className="text-sm">Trending</span>
        </Link>
        <Link href="/recent" className="bottomNavButton">
            <MdPlaylistAdd
                size={30}
                />
            <span className="text-sm">Recents</span>
        </Link>
        <Link href="/discover" className="bottomNavButton">
            <RiCompassDiscoverLine
                size={30}
                />
            <span className="text-sm">Discover</span>
        </Link>
    </div>
</div>

  )
}

export default BottomNav