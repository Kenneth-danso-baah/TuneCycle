"use client";
import { DropDownCategories } from '@/components/common/drop-down-categories';
import LeaseYearsSlider from '@/components/common/lease-slider';
import { Button } from '@/components/ui/button';
import { cryptoOptions, leasingOptions } from '@/lib/data';
import React, { useState } from 'react';

function UploadForm() {
  const [formData, setFormData] = useState({
    title: '',
    amount: '',
    currency: 'USDC',
    leaseStatus: 'Negotiable',
    leaseYears: 1, 
    musicFile: null,
    coverImage: null,
  });

  const handleChange = (e:any) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    console.log('Form Data:', formData); // leaseYears will be included here
  };

  return (
    <form onSubmit={handleSubmit} className='my-20 bg-[#252B36] rounded-[10px] p-10'>
      <h1 className='text-3xl font-monoBold'>Upload Song</h1>

      <div className='grid grid-cols-2 gap-10'>
        <div>
          <div className='flex flex-col py-5 space-y-3'>
            <label className='block text-[18px] font-bold'>Title</label>
            <input
              type='text'
              name='title'
              value={formData.title}
              onChange={handleChange}
              className='p-3 outline-none bg-[#363c46] border border-[#363346] placeholder:font-bold'
              placeholder='Enter a song'
            />
          </div>

          <div className='flex flex-col py-12 space-y-3'>
            <label className='block text-[18px] font-bold'>Amount</label>
            <div className='flex items-center gap-5'>
              <input
                type='text'
                name='amount'
                value={formData.amount}
                onChange={handleChange}
                className='p-3 outline-none bg-[#363c46] flex-1 border border-[#363346] placeholder:font-bold'
                placeholder='Enter amount'
              />
              <DropDownCategories
                className='bg-[#363c46] py-6'
                options={cryptoOptions}
                placeholder='USDC'
                label='USDC'
              />
            </div>
          </div>

          <div className='flex flex-col py-0 space-y-3'>
            <label className='block text-[18px] font-bold'>Lease Status</label>
            <DropDownCategories
              className='bg-[#363c46]'
              options={leasingOptions}
              placeholder='Negotiable'
              label='Negotiable'
            />
          </div>
        </div>

        <div>
          <div className='flex flex-col py-5 space-y-3'>
            {/* Pass years and setYears as props */}
            <LeaseYearsSlider
              years={formData.leaseYears}
              setYears={(value) => setFormData((prev) => ({ ...prev, leaseYears: value }))}
            />
          </div>

          <div className='flex flex-col py-5 space-y-3'>
            <label className='block text-[18px] font-bold'>Upload Music</label>
            <input
              type='file'
              name='musicFile'
              onChange={handleChange}
              className='p-3 outline-none bg-[#363c46] border border-[#363346] placeholder:font-bold'
              accept='audio/*'
            />
          </div>

          <div className='flex flex-col py-5 space-y-3'>
            <label className='block text-[18px] font-bold'>Upload Cover Image</label>
            <input
              type='file'
              name='coverImage'
              onChange={handleChange}
              className='p-3 outline-none bg-[#363c46] border border-[#363346] placeholder:font-bold'
              accept='image/*'
            />
          </div>

          <div className='flex flex-col py-5 space-y-3'>
            <label className='block text-[18px] font-bold'>Upload Song</label>
            <div className='place-self-start bg-[#363c46] p-2'>
              <Button type="submit" className='text-white font-bold'>Upload</Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default UploadForm;