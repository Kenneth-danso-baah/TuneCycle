"use client";
import { DropDownCategories } from '@/components/common/dropDownCategories';
import LeaseYearsSlider from '@/components/common/leaseSlider';
import { cryptoOptions, genreOptions } from '@/lib/data';
import React, { useState } from 'react';
import { pinata } from '@/lib/pinanta';
import { sepolia } from 'viem/chains'
import {  contractAbi,contractAddress } from '@/lib/integrations/viem/abi'
import { usePrivy } from '@privy-io/react-auth';
import { useSmartWallets } from "@privy-io/react-auth/smart-wallets";
import { encodeFunctionData } from "viem";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FaImage, FaMusic } from 'react-icons/fa';

function UploadForm() {
  const { user} = usePrivy()
  const walletAddress = user?.wallet?.address;
  const { client } = useSmartWallets();
  const [loading, setLoading] = useState(false);
  const [nftTx, setNftTx] = useState("");
  const [errorMessageNft, setErrorMessageNft] = useState("");
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);


  const router = useRouter();

  const [formData, setFormData] = useState({
    title: '',
    artiste:'',
    amount: '',
    currency: 'ETH',
    leaseYears: 1, 
    musicFile: '',
    coverImage: '',
    genre:''

  });



  const handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const  handleSubmit  = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setNftTx("");
    if (!client) {
      console.error("No smart account client found");
      return;
    }

    setErrorMessageNft("");
    try {
      const tx = await client.sendTransaction({
        chain: sepolia,
        to: contractAddress,
        value: BigInt(0),
        data: encodeFunctionData({
          abi: contractAbi,
          functionName: "mint",
          args: [
               formData.musicFile, 
                formData.coverImage,
                formData.title,
                formData.genre,
                formData.artiste,
                BigInt(Number(formData.amount) * 1e18),
                BigInt(formData.leaseYears),
                `${walletAddress}`
                ],
        }),
      });
      console.log("tx", tx);
      setNftTx(tx);
      setShowSuccessPopup(true)

      setFormData({
        title: '',
        artiste: '',
        amount: '',
        currency: 'ETH',
        leaseYears: 1,
        musicFile: '',
        coverImage: '',
        genre: ''
      });

      setTimeout(()=>{
        router.push('/dashboard/leases/')
      },3000)
  
    } catch (error) {
      console.error("Failed to update blockchain:", error);
      console.error("Transaction failed:", error);
      setErrorMessageNft("Transaction failed. Please try again.");

    } finally {
      setLoading(false);
    }
    console.log('Form Data:', formData);
  };

  const handleImageUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setLoading(true);
      const response = await pinata.upload.file(file);
      const ipfsHash = response.IpfsHash;
      const imageURL = `https://ipfs.io/ipfs/${ipfsHash}`;
      setFormData((prevUser) => ({
        ...prevUser,
        coverImage: imageURL
      }));
      setLoading(false);
    }
  };

  const handleMusicUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setLoading(true);
      const response = await pinata.upload.file(file);
      const ipfsHash = response.IpfsHash;
      const videoURL = `https://ipfs.io/ipfs/${ipfsHash}`;
      setFormData((prevUser) => ({
        ...prevUser,
        musicFile: videoURL
      })); 
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className='my-20 bg-[#252B36] rounded-[10px] p-10'>
      <h1 className='text-3xl font-monoBold'>Upload Song</h1>
      
      {loading && (
  <div className="flex justify-center my-4">
    <div className="w-8 h-8 border-4 border-[#761EFE] border-t-transparent rounded-full  animate-gradient-spin"></div>
  </div>
)}


      
      {nftTx && <p className='text-green-500'>Transaction Successful: {nftTx}</p>}
      {errorMessageNft && <p className='text-red-500'>Error: {errorMessageNft}</p>}

      {showSuccessPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#252B36] p-10 rounded-lg text-center">
            <h2 className="text-2xl font-bold text-green-500">Success!</h2>
            <div  className='w-full flex items-center justify-center'>
            <Image src="/images/yeey.png" alt="congrats" width={80} height={80}/>
            </div>
            <p className="mt-4">Your music has been successfully uploaded.</p>
            <p className="mt-2">Redirecting to the leased page...</p>
          </div>
        </div>
      )}



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
                placeholder='ETH'
                label='ETH'
              />
            </div>
          </div>

          <div className='flex flex-col py-0 space-y-3'>
            <label className='block text-[18px] font-bold'>Genres</label>
            <DropDownCategories
            className='bg-[#363c46]'
          options={genreOptions}
          placeholder='Select Genre'
          label='Genre'
          onValueChange={(selectedGenre) => 
        setFormData((prev) => ({ ...prev, genre: selectedGenre }))
        }
        />

          </div>
        </div>

        <div>
          <div className='flex flex-col py-5 space-y-3'>
         
            <LeaseYearsSlider
              years={formData.leaseYears}
              setYears={(value) => setFormData((prev) => ({ ...prev, leaseYears: value }))}
            />
          </div>

<div className='flex flex-col py-5 space-y-3'>
  <label className='block text-[18px] font-bold'>Upload Cover Image</label>
  <div className="relative">
    <input
      type='file'
      name='coverImage'
      onChange={handleImageUpload}
      className="hidden"
      id="coverImageInput"
      accept='image/*'
    />
    <label
      htmlFor="coverImageInput"
      className="cursor-pointer bg-[#363c46] text-white px-4 py-2 rounded-lg border border-[#363346]  transition-colors duration-200 flex items-center gap-2"    >
      <FaImage /> Choose Image
    </label>
    {formData.coverImage && (
      <div className="mt-2">
        <Image src={formData.coverImage} alt="Cover Preview" className="w-20 h-20 object-cover rounded-lg" width={20} height={20}/>
      </div>
    )}
  </div>
</div>

<div className='flex flex-col py-5 space-y-3'>
  <label className='block text-[18px] font-bold'>Upload Music</label>
  <div className="relative">
    <input
      type='file'
      name='musicFile'
      onChange={handleMusicUpload}
      className="hidden"
      id="musicFileInput"
      accept='audio/*'
    />
    <label
      htmlFor="musicFileInput"
      className="cursor-pointer bg-[#363c46] text-white px-4 py-2 rounded-lg border border-[#363346]  transition-colors duration-200 flex items-center gap-2"
    >
      <FaMusic /> Choose Music File
    </label>
    {formData.musicFile && (
      <p className="mt-2 text-sm text-gray-500">Music file selected</p>
    )}
  </div>
</div>



          <div className='flex flex-col py-5 space-y-3'>
            <label className='block text-[18px] font-bold'>Artiste</label>
            <input
              type='text'
              name='artiste'
              placeholder='Artist Name'
              onChange={ handleChange}
              value={formData.artiste}
              className='p-3 outline-none bg-[#363c46] border border-[#363346] placeholder:font-bold'
            />
          </div>


          <div className='flex flex-col py-5 space-y-3'>
            <label className='block text-[18px] font-bold'>Upload Song</label>
            <div className='place-self-start bg-[#363c46] '>
                <button 
                disabled={!formData.genre || !formData.amount || !formData.currency || !formData.leaseYears || !formData.musicFile || !formData.coverImage}
                className={`px-4 py-2 rounded ${!formData.genre || !formData.title || !formData.leaseYears || !formData.musicFile || !formData.coverImage 
                  ? "bg-gray-500 cursor-not-allowed" 
                  : "bg-green-600 hover:bg-green-700"}`}
                type="submit">
                  Upload
                </button>
              
            </div>
          </div>


        </div>
      </div>
    </form>
  );
}

export default UploadForm;