import React from "react";
import type { Metadata } from "next";
import localFont from 'next/font/local'
import "./globals.css";
import { Providers } from "@/components/common/privy-provider";
import {Provider} from 'react-redux'
import { store } from "./store";
import ClientRootLayout from "@/components/common/client-root-layout";


const montBold = localFont({
  src: '../../public/fonts/Montserrat-Bold.ttf',
  variable: '--font-mont-bold'
})

const montLight = localFont({
  src: '../../public/fonts/Montserrat-ExtraLight.ttf',
  variable: '--font-mont-light'
})

const poppins = localFont({
  src: '../../public/fonts/Poppins-Regular.ttf',
  variable: '--font-poppins'
})


export const metadata: Metadata = {
  title: "TuneCycle",
  description: "Leased Artist Hub",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
           className={`${montBold.variable} ${poppins.variable} ${montLight.variable} antialiased font-monoLight globally`}
      >
            <ClientRootLayout>{children}</ClientRootLayout>   
      </body>
    </html>
  );
}
