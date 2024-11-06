import React from 'react';
import CustomScrollContainer from '../layout/CustomScrollContainer';
import { OPTION_LIST } from '@/_constants/OPTION_LIST';
import Image from 'next/image';

const MenuOption = () => {
  return (
    <div className='flex h-[calc(100%-80px)] flex-col px-10'>
      {/* 상품 명, 가격 */}
      <div className='mb-5 flex shrink-0 border-b border-solid border-light-green-bright py-8 text-center text-3xl font-semibold'>
        <div className='flex w-2/3 items-center justify-center'>상품 명</div>
        <div className='flex w-1/3 items-center justify-center'>+추가금</div>
      </div>

      {/* 추가 메뉴 리스트 */}
      <CustomScrollContainer className='flex-1'>
        <div>
          {OPTION_LIST.map((item, idx) => {
            console.log('jiwon idx', idx);
            return (
              <div
                key={idx}
                className='mt-10 first:mt-0'>
                <div className='w-full text-2xl text-light-orange-light'>{item.optionCategory}</div>

                <div className='flex flex-nowrap gap-3'>
                  {item.list.map((optionItem, optionIdx) => {
                    return (
                      <button
                        key={optionIdx}
                        className='group flex w-1/4 flex-col items-center'>
                        {optionItem.icon && (
                          <div>
                            <Image
                              width={120}
                              height={120}
                              src={optionItem.icon}
                              alt='옵션'
                            />
                          </div>
                        )}
                        <div className='mt-5 w-full rounded-2xl bg-light-green-deep px-2 py-4 text-center transition-colors ease-in group-hover:bg-light-green-bright'>
                          <span>{optionItem.name}</span>
                          <span>{optionItem.price}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </CustomScrollContainer>
    </div>
  );
};

export default MenuOption;
