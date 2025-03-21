import { setLoading, setFilteredQuery } from '@/app/features/search/searchSlice';
import { RootState } from '@/app/store';
import Image from 'next/image'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';




function MarketPlaceSubHeader() {
  const dispatch = useDispatch();

  const {query, loading} = useSelector((state:RootState)=>state.search);

  const handleSearchChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
    const value = e.target.value;
    dispatch(setLoading(true));
    dispatch(setFilteredQuery(value));

    setTimeout(()=>{
      dispatch(setLoading(false))
    },500)
  }
  return (
    <div className='bg-brand-rcc'>
        <div className='flex items-center gap-20 mx-52 py-4'>
        <div className='w-full bg-brand-primary border border-brand-mouve p-3 rounded-[5px]'>
            <div className='flex justify-between '>
            <input 
            type="text"
            value={query}
            onChange={handleSearchChange}
             className='w-full 
             bg-transparent 
             outline-none 
             placeholder:font-extrabold 
              placeholder:text-start 
              placeholder:ml-10'
               placeholder='Search for leased music'
               />
             {loading ? (
              <div className="mr-10 animate-spin w-5 h-5 border-2 border-gray-300 border-t-brand-mouve rounded-full"></div>
            ) : (
              <Image src='/images/Search.svg' alt="search-icon" width={30} height={20} className='mr-10' />
            )}

            </div>
            </div>
        </div>
    </div>
  )
}

export default MarketPlaceSubHeader