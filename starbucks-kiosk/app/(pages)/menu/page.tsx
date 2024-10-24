export const dynamic = 'force-dynamic';

import React from 'react';
import MenuContent from './components/MenuContent';
import getMenuList from '@/_api/menu';

/** @desc 메뉴 리스트 페이지 */
const MenuListPage = async () => {
  const res = await getMenuList();

  if (!res?.data) {
    return <>{res?.message}</>;
  }

  return <MenuContent menuData={res.data} />;
};

export default MenuListPage;
