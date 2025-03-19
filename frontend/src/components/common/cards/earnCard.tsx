import React from 'react'

interface EarnProps{
    p1:string;
    p2:string;
    p3:string;
}

function EarnCard({p1,p2,p3}:EarnProps) {
  return (
    <div className='space-y-5 p-3  w-[100%] text-[18px] font-bold py-5 leading-[2.5rem] bg-[#1F2231]'>
        <div>
            <p>{p1}</p>
        </div>

        <div>
            <p>{p2}</p>
        </div>

        <div>
            <p>{p3}</p>
        </div>

    </div>
  )
}

export default EarnCard