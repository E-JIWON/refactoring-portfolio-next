'use client';

import React, { useEffect, useRef, useState } from 'react';
import { MENU_CATEGORY } from '@/_constants/MENU';
import { MenuState } from './MenuContent';

interface HoverMenuState {
  current: MenuState | null; // 현재 호버된 메뉴 상태
  previous: MenuState | null; // 이전에 호버된 메뉴 상태
}

interface MenuCategoryListPorps {
  activeMenu: MenuState;
  setActiveMenu: React.Dispatch<React.SetStateAction<MenuState>>;
}
const MenuCategoryList = ({ ...props }: MenuCategoryListPorps) => {
  const { activeMenu, setActiveMenu } = props;
  const navRef = useRef<HTMLUListElement>(null); // 슬라이더 위치 계산을 위한 ref

  const sliderClass = 'absolute top-1/2 mt-0.5 h-[80%] origin-center -translate-y-1/2 rounded-3xl'; // slider common css

  // 호버 상태 - current는 이전 상태, previous - 현재 호버
  const [hoverMenu, setHoverMenu] = useState<HoverMenuState>({
    current: null,
    previous: null,
  });

  // 컴포넌트 마운트 시 초기 메뉴 위치 설정
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

  // 클릭 시 메뉴 위치 계산
  const onClickMenu = (
    item: {
      idx: number;
      name: string;
    },
    idx: number
  ) => {
    if (navRef.current) {
      const clickableItem = navRef.current.children[idx] as HTMLLIElement;
      setActiveMenu({
        idx,
        left: clickableItem.offsetLeft,
        width: clickableItem.offsetWidth,
      });
    }
  };

  // 호버 시 이전 위치, 현재 위치 저장
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

  // 호버 종료 시 초기화
  const onMouseLeave = () => {
    setHoverMenu((prev) => ({
      previous: prev.current,
      current: null,
    }));
  };

  return (
    <nav className='h-[5vh] w-full border-y border-y-light-green-light px-14'>
      <ul
        ref={navRef}
        className='relative flex h-full items-center justify-center'>
        {/* 메뉴 아이템 리스트 */}
        {MENU_CATEGORY.map((item, idx) => (
          <li
            key={item.idx}
            onClick={() => onClickMenu(item, idx)}
            onMouseEnter={() => onMouseEnter(idx)}
            onMouseLeave={onMouseLeave}
            className='z-10 h-full w-fit cursor-pointer px-8 text-center text-[3vh] leading-[5vh]'>
            {item.name}
          </li>
        ))}

        {/* Active Slider */}
        <div
          className={`${sliderClass} bg-light-green-bright`}
          style={{
            left: activeMenu.left,
            width: activeMenu.width,
            transition: 'all 0.6s cubic-bezier(0.23, 1, 0.32, 1.05)',
          }}
        />

        {/* Hover Slider */}
        <div
          className={`${sliderClass} bg-light-green-dark/50`}
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
  );
};

export default MenuCategoryList;
