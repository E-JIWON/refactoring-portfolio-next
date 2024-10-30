'use client';

import { MenuListResponse } from '@/_types/menu';
import React, { useState } from 'react';
import MenuCategoryList from './MenuCategoryList';
import MenuItemList from './MenuItemList';

export interface MenuState {
  idx: number; // 메뉴 아이템의 인덱스
  left: number; // MenuCategoryList - 메뉴 아이템의 왼쪽 위치 (offsetLeft)
  width: number; // MenuCategoryList -
}

const MenuContent = () => {
  const [activeMenu, setActiveMenu] = useState<MenuState>({
    idx: 0,
    left: 0,
    width: 0,
  });

  return (
    <section className='grid h-full w-full grid-rows-[80px_2fr_1fr]'>
      {/* 카테고리 네비게이션 */}
      <MenuCategoryList
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />

      {/* 메뉴 리스트  */}
      <MenuItemList activeMenu={activeMenu} />

      <div>결과 나오는 곳</div>
    </section>
  );
};

export default MenuContent;
