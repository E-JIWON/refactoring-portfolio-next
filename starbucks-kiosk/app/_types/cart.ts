export interface CartItem {
  productName: string;
  price: number;
  count?: number; // 장바구니 담을 때 필요
  option?: OptionItem;
}
