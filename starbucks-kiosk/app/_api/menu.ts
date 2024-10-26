import { MenuItemResponse } from '@/_types/menu';
import { kyRequest } from '../_utils/fetcher';
import Response from '@/_types/api/Response';

const getMenuList = async (params: string) => {
  try {
    const res = await kyRequest<MenuItemResponse>(
      'get',
      ` http://localhost:3000/menu/api?category=${params}`
    );
    return res;
  } catch (error) {
    console.error('getMenuList error', error);
  }
};

export default getMenuList;
