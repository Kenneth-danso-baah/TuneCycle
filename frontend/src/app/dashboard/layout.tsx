"use client";

import Sidebar from '@/components/layouts/sidebar';
import ProtectedRoute from '@/lib/protected-route';
import React, { ReactNode, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import FlipperLoader from '@/components/common/flipperLoader';

function Layout({ children }: { children: ReactNode }) {
  const [showContent, setShowContent] = useState(false);
  const loading = useSelector((state: RootState) => state.auth.loading);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => clearTimeout(timer); 
  }, []);

  return (
    <ProtectedRoute>

      {!showContent || loading ? (
        <FlipperLoader />
      ) : (
        <div className='flex gap-20'>
          <div className='fixed top-0 left-0 h-dvh bg-[#101111] w-[80px] lg:w-[200px]'>
            <Sidebar />
          </div>
          <div className='ml-[0rem] md:ml-[80px] lg:ml-[200px] flex-[90%] md:flex-[80%]'>
            {children}
          </div>
        </div>
      )}
    </ProtectedRoute>
  );
}

export default Layout;