import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { queries } from '@/_queries/menu';
import getMenuList from '@/_api/menu';
import { MenuListResponse } from '@/_types/menu';
import { MenuState } from './MenuContent';
import { ITEMS_PER_PAGE, MENU_CATEGORY } from '@/_constants/MENU';
import SkeletonMenuItem from './SkeletonMenuItem';
import { useModal } from '@/_hooks/useModal';

interface MenuItemListProps {
  activeMenu: MenuState;
}
const MenuItemList = ({ ...props }: MenuItemListProps) => {
  const { activeMenu } = props;

  const { openModal } = useModal();
  const activeCategory = MENU_CATEGORY.find((item) => item.idx === activeMenu.idx); // 현재 카테고리

  const { data: menuList, isLoading } = useQuery({
    queryKey: queries.list(activeCategory?.name ?? 'season'),
    queryFn: async () => {
      await new Promise((resolve) => setTimeout(resolve, 800)); // 스켈레톤 보여주기 위한 딜레이
      return getMenuList(activeCategory?.name ?? 'season');
    },
  });

  // 네비게이션 노출 여부
  const shouldShowNavigation = menuList ? menuList.length > ITEMS_PER_PAGE : false;

  /** 카테고리 별로 8개씩 잘라서 2차원 배열로 만들어주는 작업 */
  const getCategoryGroupItems = (items?: MenuListResponse[]): MenuListResponse[][] | [] => {
    if (items) {
      const result: MenuListResponse[][] = [];
      for (let i = 0; i < items.length; i += ITEMS_PER_PAGE) {
        result.push(items.slice(i, i + ITEMS_PER_PAGE));
      }
      return result;
    }
    return [];
  };

  const categoryMenuList = useMemo(() => {
    return getCategoryGroupItems(menuList);
  }, [menuList]);

  // 로딩 중일 때 스켈레톤
  if (isLoading) {
    return <SkeletonMenuItem />;
  }

  return (
    <section className='mt-5 max-w-[900px] px-5'>
      <Swiper
        navigation={
          shouldShowNavigation
            ? {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
              }
            : false
        }
        modules={[Navigation]}
        loop={false}>
        {categoryMenuList?.map((group, groupIdx) => {
          return (
            <SwiperSlide key={groupIdx}>
              <ul className='grid grid-cols-4 gap-x-4 gap-y-8'>
                {group.map((item, idx) => (
                  <li
                    key={idx}
                    className='h-64 rounded-3xl bg-light-white-light p-4'>
                    <button
                      className='w-full'
                      onClick={() => openModal()}>
                      <figure>
                        <div className='relative mb-2 h-40 w-full overflow-hidden rounded-2xl'>
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
        {shouldShowNavigation && (
          <>
            <button className='swiper-button-prev !h-10 !w-10 rounded-full bg-light-green-dark shadow-lg after:!text-xl after:text-light-white-light' />
            <button className='swiper-button-next !h-10 !w-10 rounded-full bg-light-green-dark shadow-lg after:!text-xl after:text-light-white-light' />
          </>
        )}
      </Swiper>
    </section>
  );
};

export default MenuItemList;
