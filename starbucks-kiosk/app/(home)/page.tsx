import React from 'react';
import Link from 'next/link';
import ManagerComponent from './components/ManagerComponent';

export default function Home() {
   return (
      <div className="p-5 rounded-lg bg-light-white-500 text-light-green-500">
         <Link href={'./menu'}>menu로 이동하기</Link>
      </div>
   );
}
