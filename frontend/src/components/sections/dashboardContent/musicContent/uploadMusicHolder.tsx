"use client";

import React, { useEffect, useState } from 'react';
import SearchFilterColumn from './searchFilterColumn';
import TableTitle from './tableTitle';
import { Button } from '@/components/ui/button';
import MusicContentForUpload from './musicContentForUpload';
import { readUserListings } from '@/lib/integrations/viem/contract';
import { usePrivy } from '@privy-io/react-auth';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/app/store';
import NotFoundContent from '@/components/common/notFoundContent';
import { Listing } from '../../../../../types/global.types';
import Indicators from '@/components/common/indicators';
import { setTotalItems, setItemsPerpage, goToPrevPage, goToNextPage, goToPage } from '@/app/features/pagination/paginationSlice';



function UploadMusicHolder() {
  const { user } = usePrivy();
  const walletAddress = user?.wallet?.address;
  const [listing, setListing] = useState<Listing[]>();
  const query = useSelector((state:RootState)=>state.search.query);
  const {currentPage, itemsPerPage, totalItems} = useSelector((state:RootState)=>state.pagination);
  const dispatch = useDispatch<AppDispatch>();


  useEffect(() => {
    const fetchUserData = async () => {
      if (walletAddress) {
        const balance = await readUserListings(`${walletAddress}` as `0x${string}`);
        if (balance) {
          setListing(balance);
          dispatch(setTotalItems(balance.length))
          dispatch(setItemsPerpage(5))
        }
      }
    };
    fetchUserData();
  }, [walletAddress, dispatch]);


  const filteredListings = listing?.filter((item) => 
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.genre.toLowerCase().includes(query.toLowerCase()) || 
    item.owner.toLowerCase().includes(query.toLowerCase())
  );

  const startIndex = currentPage * itemsPerPage;
  const visibleListings = filteredListings?.slice(startIndex, startIndex + itemsPerPage );

  const handlePrev=()=>{
    dispatch(goToPrevPage())
  }

  const handleNext=()=>{
    dispatch(goToNextPage());
  }


  const handleGoToPage=(pageIndex:number)=>{
    dispatch(goToPage(pageIndex))
  };


  return (
    <div className='my-10 h-auto p-10 rounded-2xl w-full bg-[#252B36]'>
    <SearchFilterColumn filterFunction={filteredListings ? (item, query) => 
  item.title.toLowerCase().includes(query.toLowerCase()) ||
  item.genre.toLowerCase().includes(query.toLowerCase()) || 
  item.owner.toLowerCase().includes(query.toLowerCase())
  : () => false} />


      <TableTitle />


      {visibleListings && visibleListings.length > 0 ? (
        visibleListings.map((data, index) => (
          <MusicContentForUpload
            key={index}
            image={data.image}
            title={data.title}
            index={index+1}
            genre={data.genre}
            leaseYear={data.leaseYear}
            isListed={data.isListed}
            owner={data.owner}
            price={data.price}
            tokenId={data.tokenId}
            artiste={data.artiste || ""}
            music={data.music}
          />
        ))
      ) : (
     
        <NotFoundContent 
        title="Music not found"
         description={`No resutls found for ${query}`}
         image='/images/errors.png'/>
      )}

      <Link href="/dashboard/upload" className='flex justify-center py-10'>
        <Button className="text-[18px] bg-btn-gradient py-6 px-6 font-extrabold">upload</Button>
      </Link>


      <Indicators 
      currentPage={currentPage}

       totalPages={Math.ceil(totalItems / itemsPerPage)}
       
       onPrev={ handlePrev} 

      onNext={handleNext} 
      
      onGoToPage={handleGoToPage}/>

    </div>
  );
}

export default UploadMusicHolder;