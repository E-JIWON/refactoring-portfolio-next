import React from 'react';

const SkeletonMenuItem = () => {
  const skeletonLength = 8;
  return (
    <section className='mt-5 max-w-[900px] px-5'>
      <ul className='grid grid-cols-4 gap-x-4 gap-y-8'>
        {Array.from({ length: skeletonLength }).map((_, i) => (
          <li
            key={i}
            className='relative h-64 overflow-hidden rounded-3xl bg-skeleton-base/30 p-4'>
            {/* 이미지 스켈레톤 */}
            <div className='relative mb-2 h-40 w-full overflow-hidden rounded-2xl bg-skeleton-base/40'>
              <div className='absolute inset-0 -translate-x-full animate-skeleton-loading bg-gradient-to-r from-skeleton-base/40 via-skeleton-highlight/30 to-skeleton-base/40' />
            </div>

            {/* 상품명 스켈레톤 */}
            <div className='relative mx-auto mb-2 h-6 w-2/3 overflow-hidden rounded bg-skeleton-base/40'>
              <div className='absolute inset-0 -translate-x-full animate-skeleton-loading bg-gradient-to-r from-skeleton-base/40 via-skeleton-highlight/30 to-skeleton-base/40' />
            </div>

            {/* 가격 스켈레톤 */}
            <div className='relative mx-auto h-7 w-1/2 overflow-hidden rounded bg-skeleton-base/40'>
              <div className='absolute inset-0 -translate-x-full animate-skeleton-loading bg-gradient-to-r from-skeleton-base/40 via-skeleton-highlight/30 to-skeleton-base/40' />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkeletonMenuItem;
