/** @desc 카테고리 타입 */
type categoryType = 'coffee' | 'etc' | 'frappuccino' | 'season' | 'tea';

/** @desc 메뉴 아이템 응답 타입 */
export type MenuItemDTO = {
  id: string;
  data: {
    category: string;
    price: number;
    productName: string;
    imgSrc: string;
  };
};

export type MenuItemResponse = MenuItemDTO[];
