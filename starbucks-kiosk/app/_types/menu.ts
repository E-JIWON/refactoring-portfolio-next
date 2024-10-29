/** @desc 카테고리 타입 */
export type CategoryType = 'coffee' | 'etc' | 'frappuccino' | 'season' | 'tea';

/** @desc 메뉴 아이템 데이터 타입 (공통) */
export type MenuListResponse = {
  category: CategoryType;
  price: number;
  productName: string;
  imgSrc: string;
};

/** @desc 메뉴 아이템 DTO (데이터베이스/목데이터용) */
export type MenuItemMock = {
  id: string;
  data: MenuListResponse;
};
