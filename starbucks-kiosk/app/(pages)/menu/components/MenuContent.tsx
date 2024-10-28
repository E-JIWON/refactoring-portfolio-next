'use client';

import { MenuListResponse } from '@/_types/menu';
import React, { useState } from 'react';
import MenuCategoryList from './MenuCategoryList';
import MenuItemList from './MenuItemList';

const MenuContent = () => {
  return (
    <section className='grid h-full w-full grid-rows-[80px_2fr_1fr]'>
      {/* 카테고리 네비게이션 */}
      <MenuCategoryList />

      {/* 메뉴 리스트  */}
      <MenuItemList />

      <div>결과 나오는 곳</div>
    </section>
  );
};

export default MenuContent;
