import { DropDownCategories } from '@/components/common/dropDownCategories'
import { Button } from '@/components/ui/button'
import { cryptoOptions } from '@/lib/data'
import React from 'react'

function PersonalInformation() {
  return (
    <div className='py-10 bg-[#252B36] rounded-[10px] p-10'>
        <div>
            <h1 className='text-3xl font-monoBold capitalize'>personal information</h1>
        </div>

        <div className='grid grid-cols-2 gap-10'>
            <div>
                <div className='flex flex-col py-5 space-y-3'>
                    <label htmlFor="" className='block text-[18px] font-bold'>First Name</label>
                     <input type="text" className="p-3 outline-none bg-[#363c46]  border border-[#363346] placeholder:font-bold" placeholder='John'/>
                </div>

                <div className='flex flex-col py-5 space-y-3'>
                <label htmlFor="" className='block text-[18px] font-bold'>Date Of Birth</label>
                <input type="text" className="p-3 outline-none bg-[#363c46]  border border-[#363346] placeholder:font-bold" placeholder='19/06/2000'/>
                </div>


                <div className='flex flex-col py-5 space-y-3'>
                            <DropDownCategories 
                                className='bg-[#363c46]'
                                options={cryptoOptions}
                                placeholder='USDT' 
                            label='USDT' />
                </div>
                
                
            </div>


            <div>
                <div className='flex flex-col py-5 space-y-3'>
                    <label htmlFor="" className='block text-[18px] font-bold'>Last Name</label>
                    <input type="text" className="p-3 outline-none bg-[#363c46]  border border-[#363346] placeholder:font-bold" placeholder='Doe'/>
                    </div>

                <div className='flex flex-col py-5 space-y-3'>
                <label htmlFor="" className='block text-[18px] font-bold'>Mobile Phone</label>
                <input type="text" className="p-3 outline-none bg-[#363c46]  border border-[#363346] placeholder:font-bold" placeholder='+233 548600000000'/>
                </div>


                <div className='flex flex-col py-5 space-y-3'>
                <label htmlFor="" className='block text-[18px] font-bold'>email</label>
                <input type="text" className="p-3 outline-none bg-[#363c46]  border border-[#363346] placeholder:font-bold" placeholder='johndoe@gmail.com'/>
                </div>
                
            </div>

        </div>

        <div className='flex justify-center py-10'>
            <Button className="text-3xl bg-btn-gradient py-7  font-extrabold ">upload</Button>
         </div>

    </div>
  )
}

export default PersonalInformation