import { RiCompassDiscoverLine } from 'react-icons/ri'
const discoverPage = () => {
  return (
    <div className='componentSpacing'>
      <div className='flex-center gap-4'>
        <RiCompassDiscoverLine
          size={40}
          />
        <div>
          <p className='font-bold text-xl'>Discover</p>
        </div>
      </div>
    </div>
  )
}

export default discoverPage