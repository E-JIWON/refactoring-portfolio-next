'use client';

import React, { useState } from 'react';
import MenuCategoryList from './MenuCategoryList';
import MenuItemList from './MenuItemList';
import ResultButton from './ResultButton';
import MenuOption from '@/_ui/components/modal/MenuOption';
import Modal from '@/_ui/components/modal/Modal';

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
      {/* 모달 - modal-root 에 렌더링됨*/}
      <Modal>
        <MenuOption />
      </Modal>

      {/* 카테고리 네비게이션 */}
      <MenuCategoryList
        activeMenu={activeMenu}
        setActiveMenu={setActiveMenu}
      />

      {/* 메뉴 리스트  */}
      <MenuItemList activeMenu={activeMenu} />

      {/* 결과 영역 */}
      <div className='brder mt-4 w-full border-spacing-14 border-t-2 border-dashed border-light-green-bright px-10'>
        <div className='flex h-full justify-between py-4'>
          {/* 장바구니 */}
          <div>장바구니</div>
          {/* 버튼 */}
          <div>
            <div className='flex h-full flex-col gap-4'>
              <ResultButton ariaLabel='장바구니에 담긴 메뉴 초기화 버튼'>초기화</ResultButton>
              <ResultButton ariaLabel='장바구니에 담긴 메뉴 결제 버튼'>결제</ResultButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuContent;
