import { MenuItemResponse } from '@/_types/menu';
import { kyRequest } from './fetcher';
import { cookies } from 'next/headers';

const getMenuList = async () => {
  try {
    const res = await kyRequest<MenuItemResponse>('get', 'menu/api');
    return res?.data;
  } catch (error) {
    console.error('getMenuList error', error);
  }
};

export default getMenuList;
