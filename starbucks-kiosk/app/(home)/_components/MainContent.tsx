'use client';

import useOrder from '@/_hooks/useOrder';
import Link from 'next/link';
import React from 'react';
import MainSlide from './MainSlide';

const MainContent = () => {
  const { setOrderOption } = useOrder();

  const LinkClass =
    'flex h-full w-1/2 items-center justify-center bg-light-green-dark text-[45px] font-black text-light-orange-light transition-all duration-150 ease-linear hover:bg-light-green-bright';

  return (
    <div className='h-full w-full'>
      <div className='h-4/5 w-full'>
        <MainSlide />
      </div>

      <div className='flex h-1/5'>
        <Link
          href={{ pathname: '/menu' }}
          className={LinkClass}
          onClick={() => setOrderOption('dine-in')}>
          매장
        </Link>
        <Link
          href={{ pathname: '/menu' }}
          className={LinkClass}
          onClick={() => setOrderOption('takeout')}>
          포장
        </Link>
      </div>
    </div>
  );
};

export default MainContent;
