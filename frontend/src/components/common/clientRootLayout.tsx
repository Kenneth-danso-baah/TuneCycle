"use client"
import React,{useState,useEffect} from 'react'
import { store } from "@/app/store"
import { Provider } from "react-redux"
import { Providers } from "./privyProvider"
import ChatBot from './chatBot'


export default function ClientRootLayout({ children }: { children: React.ReactNode }) {
    const [showChatBot, setShowChatBot] = useState(false)

    useEffect(()=>{
        const handleScroll=()=>{
            if(window.scrollY > 500){
                setShowChatBot(true)
            }else{
                setShowChatBot(false)
            }
        }

        window.addEventListener("scroll", handleScroll);
        return ()=> window.removeEventListener("scroll", handleScroll)
    },[])

    return (
        <Provider store={store}>
            <Providers>{children}</Providers>
            {showChatBot && (

                <div className='fixed bottom-5 right-5 z-50'>
                    <ChatBot/>
                </div>
            )}
        </Provider>
    );
}