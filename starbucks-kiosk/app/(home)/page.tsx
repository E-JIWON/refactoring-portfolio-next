import React from 'react';
import ThemeButton from '../_module/components/button/ThemeButton';
import Link from 'next/link';

export default function Home() {
   return (
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
         <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
            <ThemeButton />
            <div className="p-5 rounded-lg bg-light-white-500 text-light-green-500">
               <Link href={'./menu'}>menu로 이동하기</Link>
            </div>
         </main>
      </div>
   );
}
