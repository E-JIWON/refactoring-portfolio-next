import { CartItem } from '@/_types/cart';
import { create } from 'zustand';

interface CartStore {
  cartList: CartItem[]; // 장바구니 리스트
  selectedMenu?: CartItem; // 현재 선택된 메뉴

  // actions

  setSelectedMenu: (menu?: CartItem) => void; // 카드에 담는 함수
  addToCart: (item: CartItem) => void; // 선택 메뉴 업데이트
  removeFromCart: (productName: string, option?: OptionItem) => void; // 카트 리셋 함수
  updateQuantity: (productName: string, count: number) => void;
  clearCart: () => void; // 카트 비우기
}

const useCartStore = create<CartStore>((set) => ({
  cartList: [],
  selectedMenu: undefined,

  setSelectedMenu: (menu) => set({ selectedMenu: menu }),

  addToCart: (item) =>
    set((state) => {
      const existingItemIndex = state.cartList.findIndex(
        (cartItem) =>
          cartItem.productName === item.productName &&
          JSON.stringify(cartItem.option) === JSON.stringify(item.option)
      );

      if (existingItemIndex !== -1) {
        // 이미 있는 아이템이면 수량만 증가
        const newCartList = [...state.cartList];
        const currentCount = newCartList[existingItemIndex].count || 1;
        newCartList[existingItemIndex].count = currentCount + 1;
        return { cartList: newCartList };
      }

      // 새로운 아이템 추가
      return {
        cartList: [...state.cartList, { ...item, count: 1 }],
      };
    }),

  removeFromCart: (productName, option) =>
    set((state) => ({
      cartList: state.cartList.filter(
        (item) =>
          !(
            item.productName === productName &&
            JSON.stringify(item.option) === JSON.stringify(option)
          )
      ),
    })),
  updateQuantity: (productName, count) =>
    set((state) => ({
      cartList: state.cartList.map((item) =>
        item.productName === productName ? { ...item, count } : item
      ),
    })),

  clearCart: () => set({ cartList: [] }),
}));

export default useCartStore;
