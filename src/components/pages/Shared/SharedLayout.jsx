import React from 'react'
import { Header } from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'Loader/Loader';

export const SharedLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Suspense fallback={<Loader/>}>
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
