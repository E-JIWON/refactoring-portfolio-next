import { MenuListResponse } from '@/_types/menu';
import { kyRequest } from '../_utils/fetcher';

const getMenuList = async (category: string) => {
  try {
    const res = await kyRequest<MenuListResponse[]>('get', 'menu/api', undefined, {
      searchParams: {
        category,
      },
    });
    console.log("jiwon res ", res);
    return res;
  } catch (error) {
    console.log("jiwon error" , error);
    
    throw error;
  }
};

export default getMenuList;
