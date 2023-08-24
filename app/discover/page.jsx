import { RiCompassDiscoverLine } from 'react-icons/ri';
import { AiFillFilter } from 'react-icons/ai';

const discoverPage = () => {
  return (
    <div className='componentSpacing'>
      <div className='flex-center gap-4'>
        <RiCompassDiscoverLine size={40} />
        <div>
          <p className='font-bold text-xl'>Discover</p>
        </div>
      </div>

      <div className='mt-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
        <div className='flex flex-wrap'>
          <input
            placeholder='Search...'
            className='rounded-md focus:outline-none text-slate-900 py-2 px-4 w-full'
          />
        </div>

        <div className='py-2 px-4 bg-slate-900 rounded-md items-center flex font-bold'>
          Genre
        </div>

        <div className='py-2 px-4 bg-slate-900 rounded-md items-center flex font-bold'>
          Language
        </div>

        <div className='py-2 px-4 bg-slate-900 rounded-md items-center flex font-bold'>
          Status
        </div>

        <button className='py-2 px-4 bg-teal-500 rounded-md items-center flex font-bold text-slate-900 gap-2 justify-center'>
          Filter
          <AiFillFilter />
        </button>
      </div>
    </div>
  );
};

export default discoverPage;
