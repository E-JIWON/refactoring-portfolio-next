'use client';
import React, { useEffect } from 'react';
import { addMultipleDocuments } from '@/_lib/firebaseConfig';

/** @desc 메뉴 리스트 페이지 */
const MenuListPage = () => {
   // DB 한번에 저장하는거임 !
   // useEffect(() => {
   //    addMultipleDocuments();
   // }, []);
   return (
      <section>
         {/* 메뉴 리스트 */}
         <div>
            <ul>
               <li>메뉴1</li>
               <li>메뉴2</li>
               <li>메뉴3</li>
               <li>메뉴4</li>
               <li>메뉴5</li>
            </ul>
         </div>
      </section>
   );
};

export default MenuListPage;
