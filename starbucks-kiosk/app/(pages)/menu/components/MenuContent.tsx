'use client';

import { MENU_CATEGORY } from '@/_constants/MENU_CATEGORY';
import { MenuItemDTO, MenuItemResponse } from '@/_types/menu';
import Image from 'next/image';
import React from 'react';

const MenuContent = ({ menuData }: { menuData: MenuItemResponse }) => {
  const seasonMenu = menuData.filter((item: MenuItemDTO) => item.data.category === 'season');
  console.log('jiwon seasonMenu', seasonMenu);
  return (
    <section>
      {/* 카테고리 리스트 */}
      <nav className='w-full px-20'>
        <ul className='flex items-center gap-10'>
          {MENU_CATEGORY.map((item) => (
            <li className='w-1/5 cursor-pointer text-center text-[36px]'>{item}</li>
          ))}
        </ul>
      </nav>

      {/* 아이템 리스트 */}
      <section>
        <ul className='grid'>
          {seasonMenu.map((item) => {
            return (
              <li className='bg-light-orange-light'>
                <figure className='relative w-64 p-4'>
                  <div className='relative h-48 w-full overflow-hidden rounded-lg shadow-md'>
                    <Image
                      src='/images/menu/season/apple_tea.jpg'
                      alt='dd'
                      width={24}
                      height={24}
                    />
                  </div>
                  <figcaption className='mt-2 text-lg font-medium text-[rgb(0,30,30)]'>{name}</figcaption>
                  <figcaption className='mt-1'>
                    <span className='text-base font-semibold'>1023</span>
                    <span className='ml-1 text-base'>원</span>
                  </figcaption>
                </figure>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
};

export default MenuContent;
