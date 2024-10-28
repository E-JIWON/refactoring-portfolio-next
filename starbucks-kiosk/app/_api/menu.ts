import { MenuListResponse } from '@/_types/menu';
import { kyRequest } from '../_utils/fetcher';
import Response from '@/_types/api/Response';

const getMenuList = async (category: string) => {
  try {
    const res = await kyRequest<MenuListResponse[]>('get', 'menu/api', undefined, {
      searchParams: {
        category,
      },
    });
    return res;
  } catch (error) {
    console.error('getMenuList error', error);
  }
};

export default getMenuList;
