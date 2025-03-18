"use client";
import { DropDownCategories } from '@/components/common/dropDownCategories';
import LeaseYearsSlider from '@/components/common/leaseSlider';
import { Button } from '@/components/ui/button';
import { cryptoOptions, genreOptions, leasingOptions } from '@/lib/data';
import React, { useState } from 'react';
import { pinata } from '@/lib/pinanta';
import { sepolia } from 'viem/chains'
import { createWalletClient, custom,getContract } from 'viem'
import {  contractAbi,contractAddress } from '@/lib/integrations/viem/abi'
import { usePrivy, useWallets } from '@privy-io/react-auth';
import { useSmartWallets } from "@privy-io/react-auth/smart-wallets";
import { encodeFunctionData } from "viem";

function UploadForm() {
  const { user} = usePrivy()
  const walletAddress = user?.wallet?.address;
  const { client } = useSmartWallets();
  const [loading, setLoading] = useState(false);
  const [nftTx, setNftTx] = useState("");
  const [errorMessageNft, setErrorMessageNft] = useState("");

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



  const handleChange = (e:any) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData((prev) => ({ ...prev, [name]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const  handleSubmit  = async (e:any) => {
    e.preventDefault();
    setLoading(true);
    setNftTx("");
    if (!client) {
      console.error("No smart account client found");
      return;
    }

    setErrorMessageNft("");
    try {
      // if (!wallets || wallets.length === 0) {
      //   console.error("No wallet connected");
      //   return;
      // }
  
      // const wallet = wallets[0];
      // if (!wallet) {
      //   console.error("Wallet is undefined");
      //   return;
      // }
  

      // const provider = await wallet.getEthereumProvider();
      // if (!provider) {
      //   console.error("Provider is undefined");
      //   return;
      // }
  
      // const currentChainId = await provider.request({ method: "eth_chainId" });

      // if (currentChainId !== `0x${sepolia.id.toString(16)}`) {
      //   await wallet.switchChain(sepolia.id);
      // }


      // const client = createWalletClient({
      //   chain: sepolia,
      //   transport: custom(provider),
      //   account: walletAddress as `0x${string}`,
      // });
      // const contract = getContract({
      //   address: contractAddress,
      //   abi: contractAbi,
      //   client,
      // });
  
      // const tsxx =    await contract.write.mint([
      //   formData.musicFile, 
      //   formData.coverImage,
      //   formData.title,
      //   BigInt(formData.amount),
      //   BigInt(formData.leaseYears)
      //   ]);
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
                BigInt(Number(formData.amount)*1e18),
                BigInt(formData.leaseYears),
                `${walletAddress}`
                ],
        }),
      });
      console.log("tx", tx);
      setNftTx(tx);
  
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
            <label className='block text-[18px] font-bold'>Upload Music</label>
            <input
              type='file'
              name='musicFile'
              onChange={ handleMusicUpload}
              className='p-3 outline-none bg-[#363c46] border border-[#363346] placeholder:font-bold'
              accept='audio/*'
            />
          </div>

          <div className='flex flex-col py-5 space-y-3'>
            <label className='block text-[18px] font-bold'>Upload Cover Image</label>
            <input
              type='file'
              name='coverImage'
              onChange={ handleImageUpload}

              className='p-3 outline-none bg-[#363c46] border border-[#363346] placeholder:font-bold'
              accept='image/*'
            />
          </div>

          <div className='flex flex-col py-5 space-y-3'>
            <label className='block text-[18px] font-bold'>Artiste</label>
            <input
              type='text'
              name='artiste'
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