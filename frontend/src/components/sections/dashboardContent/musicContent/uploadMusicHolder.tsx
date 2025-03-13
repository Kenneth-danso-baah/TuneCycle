import React from 'react'
import SearchFilterColumn from './searchFilterColumn'
import TableTitle from './tableTitle'
import { Button } from '@/components/ui/button'
import MusicContentForUpload from './musicContentForUpload'
import { songHeaders } from '@/lib/data'
import Link from 'next/link'

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


        <Link href="/dashboard/upload" className='flex justify-center py-10'>
            <Button className="text-3xl bg-btn-gradient py-7  font-extrabold ">upload</Button>
         </Link>

    </div>
  )
}

export default UploadMusicHolder