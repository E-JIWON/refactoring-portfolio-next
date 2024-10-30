import React from 'react';
import MenuContent from './components/MenuContent';
import getMenuList from '@/_api/menu';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { queries } from '@/_queries/menu';

/** @desc 메뉴 리스트 페이지 */
const MenuListPage = async () => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: queries.list('season'),
    queryFn: () => getMenuList('season'),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MenuContent />
    </HydrationBoundary>
  );
};

export default MenuListPage;
