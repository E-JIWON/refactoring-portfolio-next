import React from 'react';
import MenuContent from './components/MenuContent';
import getMenuData from '@/_api/menu';

/** @desc 메뉴 리스트 페이지 */
const MenuListPage = async () => {
  const menuData = await getMenuData();

  if (!menuData) {
    return <></>;
  }
  return <MenuContent menuData={menuData} />;
};

export default MenuListPage;
