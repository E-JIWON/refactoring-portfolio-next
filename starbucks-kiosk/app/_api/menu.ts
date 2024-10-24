import { MenuItemResponse } from '@/_types/menu';
import { kyRequest } from '../_utils/fetcher';
import Response from '@/_types/api/Response';

const getMenuList = async () => {
  try {
    const res = await kyRequest<MenuItemResponse>('get', 'menu/api');

    return res;
  } catch (error) {
    console.error('getMenuList error', error);
  }
};

export default getMenuList;
