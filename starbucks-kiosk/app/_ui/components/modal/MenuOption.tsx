import React from 'react';

const MenuOption = () => {
  return (
    <div>
      {/* 상품 명, 가격 */}
      <div className='grid-rows-[80px_1fr_80px]'>
        <div className='flex flex-row'>
          <div className=''>상품 명</div>
          <div className=''>가격</div>
        </div>

        {/* 추가 메뉴 리스트 */}
        <div className='overflow-y-scroll'>
          <div>얼음</div>
          <div>
            {/* 얼음이미지 */}
            <div>이미지</div>
            {/* 가격 */}
            <div>얼음0</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuOption;
