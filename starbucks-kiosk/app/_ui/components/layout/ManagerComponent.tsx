'use client';

import React from 'react';
import { addMultipleDocuments } from '@/_lib/firebase/addDocument';
import { resetCollection } from '@/_lib/firebase/resetDocument';
import Button from '@/_ui/components/button/Button';

/** @Desc 관리자 전용 메뉴 */
const ManagerComponent = () => {
  // "menu_item" collection에 메뉴 등록 함수
  const onClickAddMenu = () => {
    addMultipleDocuments();
  };

  // "menu_item" collection에 reset
  const onClickResetMenu = () => {
    resetCollection();
  };

  return (
    <div className='mb-4 flex items-center justify-between'>
      <span>관리자 - 메뉴를 DB에 등록하는 버튼</span>
      <div className='flex gap-2'>
        {/* <ThemeButton /> */}
        <Button
          ariaLabel='DB 메뉴 등록'
          onClick={onClickAddMenu}>
          DB 메뉴 등록
        </Button>
        <Button
          ariaLabel='DB 메뉴 리셋'
          onClick={onClickResetMenu}>
          DB 메뉴 리셋
        </Button>
      </div>
    </div>
  );
};

export default ManagerComponent;
