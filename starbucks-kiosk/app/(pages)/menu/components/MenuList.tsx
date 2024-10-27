import { MenuItemData, MenuItemResponse } from '@/_types/menu';
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { MenuState } from './MenuContent';

interface MenuListProps {
  menuData: MenuItemResponse;
  activeMenu: MenuState;
}
const MenuList = ({ ...props }: MenuListProps) => {
  const { menuData } = props;

  /** 카테고리 별로 8개씩 잘라서 2차원 배열로 만들어주는 작업 */
  const getCategoryGroupItems = (items: MenuItemData[]): MenuItemData[][] => {
    const result: MenuItemData[][] = [];
    for (let i = 0; i < items.length; i += 8) {
      result.push(items.slice(i, i + 8));
    }
    return result;
  };

  const categoryMenuList = getCategoryGroupItems(menuData);

  return (
    <section className='mt-5 max-w-[900px] px-5'>
      <Swiper
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        modules={[Navigation]}>
        {categoryMenuList.map((group, groupIdx) => {
          console.log('jiwon group', group);
          return (
            <SwiperSlide key={groupIdx}>
              <ul className='grid grid-cols-4 gap-x-4 gap-y-8'>
                {group.map((item, idx) => (
                  <li
                    key={idx}
                    className='h-72 rounded-3xl bg-light-white-light p-4'>
                    <button className='w-full'>
                      <figure>
                        <div className='relative mb-2 h-48 w-full overflow-hidden rounded-2xl'>
                          <Image
                            src={`/images/menu/${item.category}/${item.imgSrc}`}
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
                    </button>
                  </li>
                ))}
              </ul>
            </SwiperSlide>
          );
        })}
        <button className='swiper-button-prev !h-10 !w-10 rounded-full bg-light-green-dark shadow-lg after:!text-xl after:text-light-white-light'></button>
        <button className='swiper-button-next !h-10 !w-10 rounded-full bg-light-green-dark shadow-lg after:!text-xl after:text-light-white-light'></button>
      </Swiper>
    </section>
  );
};

export default MenuList;
