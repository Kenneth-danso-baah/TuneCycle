import React from 'react'
import SearchFilterColumn from './search-filter-column'
import TableTitle from './table-title'
import { Button } from '@/components/ui/button'
import MusicContentForUpload from './music-content-for-upload'
import { songHeaders } from '@/lib/data'

function UploadMusicHolder() {
  return (
    <div className='my-10 h-auto p-10 rounded-2xl w-full bg-[#252B36]'>
        <SearchFilterColumn/>
        <TableTitle/>

        {songHeaders.map((data,index)=>(
             <MusicContentForUpload
             key={index} 
             cover={data.cover} 
             songs={data.songs} 
             id={data.id}
              genre={data.genre} 
               uploaded_date={data.uploaded_date}
                status={data.status} 
                leased_by={data.leased_by} earnings={data.earnings} lease_period={data.lease_period} listeners={data.listeners} edit={data.edit}             />
         ))}


        <div className='flex justify-center py-10'>
            <Button className="text-3xl bg-btn-gradient py-7  font-extrabold ">upload</Button>
         </div>

    </div>
  )
}

export default UploadMusicHolder