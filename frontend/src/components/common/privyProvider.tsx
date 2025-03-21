"use client"
import { ReactNode } from "react";
import { PrivyProvider } from "@privy-io/react-auth";
import { SmartWalletsProvider } from "@privy-io/react-auth/smart-wallets";
import { mainnet, sepolia } from "viem/chains";

export function Providers({children}:{children:ReactNode}){
    return <PrivyProvider 
    config={{
        loginMethods:[
            "wallet",
            "email",
            "twitter",
            "google", 
        ],
        embeddedWallets:{
            createOnLogin: 'users-without-wallets',
            
        },
        defaultChain: sepolia,
        supportedChains:[sepolia,mainnet],
        
    }}
    appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ""}>
       <SmartWalletsProvider>
        {children}
        </SmartWalletsProvider>
        </PrivyProvider>
}