"use client"

import { useSelectedContactContext } from '@/app/context/SelectContext';
import React, { useEffect, useState } from 'react';
import { usePrivy } from "@privy-io/react-auth";
import { readHistoryBetweenFriendsData } from "@/lib/integrations/viem/contract";
import { SendReceive } from '../../../types/transaction.types';
import { getAddress } from 'viem'


function ContactDescriptionEvents() {
  const { user } = usePrivy();
  const walletAddress = user?.wallet?.address;
  const { selectedContact } = useSelectedContactContext();
  const [transactionHistory, setTransactionHistory] = useState<SendReceive[]>([]);

  useEffect(() => {
    console.log("Selected Contact:", selectedContact);
    const fetchUserData = async () => {
      if (!walletAddress || !selectedContact?.userAddress) return;

      try {
        const history = await readHistoryBetweenFriendsData(
          walletAddress as `0x${string}`,
          getAddress(selectedContact.userAddress as `0x${string}`)
        );
        console.log("Fetched Transaction History:", history); 
        setTransactionHistory(history || []);
      } catch (error) {
        console.error("Error fetching transaction history:", error);
      }
    };

    fetchUserData();
  }, [selectedContact?.userAddress, walletAddress, selectedContact]);

  if (transactionHistory.length===0){
    return(
        <div className='text-zinc-800'>
          <p>User has no history yet..</p>
      </div>
      )
  }
  return (
    <div className="text-zinc-800">
      <div>
        {transactionHistory.map((tx, index) => {
          const date = new Date(Number(tx.time) * 1000);

          const formattedDate = date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
          });

          return (
            <div key={index} className="p-4 rounded-lg">
              <div className='mb-3'>
                <h1>{formattedDate}</h1>
              </div>

              <div className="bg-softBlend rounded-md p-3">
                <div className="flex items-center ">

                  <div className='space-y-3'>
                     <div>
                       <h1>Amount</h1>
                      <h1>{Number(tx.amount)/1e6} USDC</h1>
                     </div>

                     <div>
                       <h1>Message</h1>
                       <p>{tx.message}</p>
                     </div>


                     <div className='flex items-center justify-between gap-20 mr-10 lg:mr-0'>
                        <div className='bg-gray-400 p-2 rounded-md'>
                          <h1 className='text-center'>{tx.action}</h1>
                        </div>

                        <div className="text-[12px] flex text-nowrap ">
                                <h1>Time:</h1>
                                    <p>
                                 {new Date(Number(tx.time) * 1000).toLocaleTimeString('en-US', {
                                hour: 'numeric',
                                      minute: '2-digit',
                                hour12: true,
                                   })}
                                   </p>
                                  </div>


                     </div>

                  </div>
                </div>
                
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ContactDescriptionEvents;