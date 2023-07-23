import Popular from '@components/Popular'
import Trending from '@components/Trending'
import Recent from '@components/Recent'
import Discover from '@components/Discover'
// import Schedule from '@components/Schedule'

const page = () => {
  return (
    <div>
      <Popular/>
      <Trending/>
      <Recent/>
      <Discover/>
    </div>
  )
}

export default page