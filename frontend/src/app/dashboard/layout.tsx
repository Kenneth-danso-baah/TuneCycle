import Sidebar from '@/components/layouts/sidebar'
import ProtectedRoute from '@/lib/protected-route'
import React, { ReactNode } from 'react'



function Layout({ children }: { children: ReactNode }) {
  console.log("Rendering Layout...");
  return (
      <ProtectedRoute>
          <div className='flex gap-20'>
              <div className='fixed top-0 left-0 h-dvh bg-[#101111] w-[80px] lg:w-[200px]'>
                  <Sidebar />
              </div>
              <div className='ml-[4.8rem] md:ml-[80px] lg:ml-[200px] flex-[90%] md:flex-[80%]'>
                  {children}
              </div>
          </div>
      </ProtectedRoute>
  );
}

export default Layout