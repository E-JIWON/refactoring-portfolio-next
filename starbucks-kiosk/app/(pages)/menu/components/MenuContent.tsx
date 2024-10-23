'use client';

import { MENU_CATEGORY } from '@/_constants/MENU_CATEGORY';
import { MenuItemData, MenuItemResponse } from '@/_types/menu';
import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

/**
 * @desc 메뉴 아이템의 위치와 크기 정보를 담는 타입
 * @property {number} idx - 메뉴 아이템의 인덱스
 * @property {number} left - 메뉴 아이템의 왼쪽 위치 (offsetLeft)
 * @property {number} width - 메뉴 아이템의 너비
 */
type MenuState = {
  idx: number;
  left: number;
  width: number;
};

/**
 * @desc 호버 상태를 관리하는 타입
 * @property {MenuState | null} current - 현재 호버된 메뉴 상태
 * @property {MenuState | null} previous - 이전에 호버된 메뉴 상태
 */
type HoverMenuState = {
  current: MenuState | null;
  previous: MenuState | null;
};

/**
 * @desc 메뉴 컨텐츠 컴포넌트
 * @param {MenuItemResponse} menuData - 메뉴 데이터 배열
 */
const MenuContent = ({ menuData }: { menuData: MenuItemResponse }) => {
  // Refs
  /** @desc 슬라이더의 위치 계산을 위한 메뉴 리스트 ref */
  const navRef = useRef<HTMLUListElement>(null);

  // States
  /** @desc 현재 활성화된(클릭된) 메뉴 상태 */
  const [activeMenu, setActiveMenu] = useState<MenuState>({
    idx: 0,
    left: 0,
    width: 0,
  });

  /** @desc 호버된 메뉴 상태 (현재 + 이전) */
  const [hoverMenu, setHoverMenu] = useState<HoverMenuState>({
    current: null,
    previous: null,
  });

  // Data Processing
  /** @desc 카테고리별 메뉴 필터링 */
  const seasonMenu = menuData.filter((item: MenuItemData) => item.category === 'season');
  // const coffeeMenu = menuData.filter((item: MenuItemData) => item.category === 'coffee');
  // const frappuccinoMenu = menuData.filter((item: MenuItemData) => item.category === 'frappuccino');
  // const etcMenu = menuData.filter((item: MenuItemData) => item.category === 'etc');
  // const teaMenu = menuData.filter((item: MenuItemData) => item.category === 'tea');

  // Lifecycle
  /** @desc 컴포넌트 마운트 시 초기 메뉴 위치 설정 */
  useEffect(() => {
    if (navRef.current) {
      const clickableItem = navRef.current.children[activeMenu.idx] as HTMLLIElement;
      if (clickableItem) {
        setActiveMenu((prev) => ({
          ...prev,
          left: clickableItem.offsetLeft,
          width: clickableItem.offsetWidth,
        }));
      }
    }
  }, []);

  // Event Handlers
  /**
   * @desc 메뉴 클릭 이벤트 핸들러
   * @param {number} idx - 클릭된 메뉴의 인덱스
   */
  const onClickMenu = (idx: number) => {
    if (navRef.current) {
      const clickableItem = navRef.current.children[idx] as HTMLLIElement;
      setActiveMenu({
        idx,
        left: clickableItem.offsetLeft,
        width: clickableItem.offsetWidth,
      });
    }
  };

  /**
   * @desc 메뉴 호버 시작 이벤트 핸들러
   * @param {number} idx - 호버된 메뉴의 인덱스
   */
  const onMouseEnter = (idx: number) => {
    if (navRef.current) {
      const hoveredItem = navRef.current.children[idx] as HTMLLIElement;
      setHoverMenu((prev) => ({
        previous: prev.current, // 이전 호버 상태 저장
        current: {
          idx,
          left: hoveredItem.offsetLeft,
          width: hoveredItem.offsetWidth,
        },
      }));
    }
  };

  /**
   * @desc 메뉴 호버 종료 이벤트 핸들러
   * 호버가 끝날 때 현재 상태를 이전 상태로 저장하고 현재 상태를 null로 설정
   */
  const onMouseLeave = () => {
    setHoverMenu((prev) => ({
      previous: prev.current,
      current: null,
    }));
  };

  return (
    <section>
      {/* 카테고리 네비게이션 */}
      <nav className='h-20 w-full border-y border-y-light-green-light px-14'>
        <ul
          ref={navRef}
          className='relative flex h-full items-center'>
          {/* 메뉴 아이템 리스트 */}
          {MENU_CATEGORY.map((item, idx) => (
            <li
              key={item + idx}
              onClick={() => onClickMenu(idx)}
              onMouseEnter={() => onMouseEnter(idx)}
              onMouseLeave={() => onMouseLeave()}
              className='z-10 h-full w-fit cursor-pointer px-8 text-center text-[32px] leading-[80px]'>
              {item}
            </li>
          ))}

          {/* Active Slider */}
          <div
            className='absolute top-1/2 mt-0.5 h-[80%] origin-center -translate-y-1/2 rounded-3xl bg-light-green-bright transition-[all_0.6s_cubic-bezier(0.23,1,0.32,1.05)]'
            style={{
              left: activeMenu.left,
              width: activeMenu.width,
              transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1.05)',
            }}
          />

          {/* Hover Slider */}
          <div
            className='absolute top-1/2 mt-0.5 h-[80%] origin-center -translate-y-1/2 rounded-3xl bg-light-green-dark/50 transition-[all_0.6s_cubic-bezier(0.23,1,0.32,1.05)]'
            style={{
              left: hoverMenu?.current?.left ?? hoverMenu?.previous?.left ?? 0,
              width: hoverMenu?.current?.width ?? hoverMenu?.previous?.width ?? 0,
              opacity: hoverMenu?.current ? 1 : 0,
              transform: `translateY(-50%) scale(${hoverMenu?.current ? 1 : 0.9})`,
              transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1.05)',
            }}
          />
        </ul>
      </nav>

      {/* 메뉴 아이템 그리드 */}
      <section className='mt-5 px-5'>
        <ul className='grid grid-cols-4 gap-x-4 gap-y-8'>
          {seasonMenu.map((item) => {
            return (
              <li className='h-72 rounded-3xl bg-light-white-light p-4'>
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
                    <span className=''>3,400</span>
                    <span>원</span>
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
