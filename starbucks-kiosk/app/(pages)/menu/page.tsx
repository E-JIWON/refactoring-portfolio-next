import React from 'react';
import MenuContent from './components/MenuContent';

const fetchData = async () => {
   const response = await fetch('http://localhost:3000/menu/api');
   return response.json();
};

/** @desc 메뉴 리스트 페이지 */
const MenuListPage = async () => {
   const a = await fetchData();

   console.log('jiwo a', a);

   return <MenuContent />;
};

export default MenuListPage;
