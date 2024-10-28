import React from 'react';
import MenuContent from './components/MenuContent';
import getMenuList from '@/_api/menu';
import { CategoryType } from '@/_types/menu';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { queries } from '@/_queries/menu';

interface MenuListPageProps {
  searchParams: Promise<{ category: CategoryType }>;
}

/** @desc 메뉴 리스트 페이지 */
const MenuListPage = async ({ searchParams }: MenuListPageProps) => {
  const { category } = await searchParams;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: queries.list(category),
    queryFn: () => getMenuList(category),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <MenuContent />
    </HydrationBoundary>
  );
};

export default MenuListPage;
