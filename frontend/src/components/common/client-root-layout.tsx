"use client"

import { store } from "@/app/store"
import { Provider } from "react-redux"
import { Providers } from "./privy-provider"


export default function ClientRootLayout({ children }: { children: React.ReactNode }) {
    console.log("Rendering ClientRootLayout...");
    return (
        <Provider store={store}>
            <Providers>{children}</Providers>
        </Provider>
    );
}