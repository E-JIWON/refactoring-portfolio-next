import React from 'react';

const SkeletonMenuItem = () => {
  const skeletonLength = 8;
  return (
    <section className='mt-5 max-w-[900px] px-5'>
      <ul className='grid grid-cols-4 gap-x-4 gap-y-8'>
        {Array.from({ length: skeletonLength }).map((_, i) => (
          <li
            key={i}
            className='bg-skeleton-base/30 relative h-72 overflow-hidden rounded-3xl p-4'>
            {/* 이미지 스켈레톤 */}
            <div className='bg-skeleton-base/40 relative mb-2 h-48 w-full overflow-hidden rounded-2xl'>
              <div className='from-skeleton-base/40 via-skeleton-highlight/30 to-skeleton-base/40 animate-skeleton-loading absolute inset-0 -translate-x-full bg-gradient-to-r' />
            </div>

            {/* 상품명 스켈레톤 */}
            <div className='bg-skeleton-base/40 relative mx-auto mb-2 h-6 w-2/3 overflow-hidden rounded'>
              <div className='from-skeleton-base/40 via-skeleton-highlight/30 to-skeleton-base/40 animate-skeleton-loading absolute inset-0 -translate-x-full bg-gradient-to-r' />
            </div>

            {/* 가격 스켈레톤 */}
            <div className='bg-skeleton-base/40 relative mx-auto h-7 w-1/2 overflow-hidden rounded'>
              <div className='from-skeleton-base/40 via-skeleton-highlight/30 to-skeleton-base/40 animate-skeleton-loading absolute inset-0 -translate-x-full bg-gradient-to-r' />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkeletonMenuItem;
