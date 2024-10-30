import { MenuListResponse } from '@/_types/menu';
import { kyRequest } from '../_utils/fetcher';

const getMenuList = async (category: string) => {
  try {
    const res = await kyRequest<MenuListResponse[]>('get', 'menu/api', undefined, {
      searchParams: {
        category,
      },
    });
    return res;
  } catch (error) {
    throw new Error('No data received');
  }
};

export default getMenuList;
