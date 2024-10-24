'use client';

import { MenuItemData, MenuItemResponse } from '@/_types/menu';
import Image from 'next/image';
import React from 'react';
import MenuCategoryList from './MenuCategoryList';

const MenuContent = ({ menuData }: { menuData: MenuItemResponse }) => {
  // Data Processing
  /** @desc 카테고리별 메뉴 필터링 */
  const seasonMenu = menuData.filter((item: MenuItemData) => item.category === 'season');
  // const coffeeMenu = menuData.filter((item: MenuItemData) => item.category === 'coffee');
  // const frappuccinoMenu = menuData.filter((item: MenuItemData) => item.category === 'frappuccino');
  // const etcMenu = menuData.filter((item: MenuItemData) => item.category === 'etc');
  // const teaMenu = menuData.filter((item: MenuItemData) => item.category === 'tea');

  return (
    <section className='grid h-full w-full grid-rows-[80px_2fr_1fr]'>
      {/* 카테고리 네비게이션 */}
      <MenuCategoryList />

      {/* 메뉴 아이템 그리드 */}
      <section className='mt-5 px-5'>
        <ul className='grid grid-cols-4 gap-x-4 gap-y-8'>
          {seasonMenu.map((item) => {
            return (
              <li
                key={item.productName}
                className='h-72 rounded-3xl bg-light-white-light p-4'>
                <figure>
                  <div className='relative mb-2 h-48 w-full overflow-hidden rounded-2xl'>
                    <Image
                      src={'/images/menu/season/' + item.imgSrc}
                      alt={item.productName}
                      fill
                      className='object-cover'
                    />
                  </div>
                  <figcaption className='text-center text-lg font-bold text-light-green-deep'>
                    {item.productName}
                  </figcaption>
                  <figcaption className='text-center text-2xl font-semibold text-light-orange-light'>
                    <span>3,400</span>
                    <span>원</span>
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      </section>

      <div>결과 나오는 곳</div>
    </section>
  );
};

export default MenuContent;
