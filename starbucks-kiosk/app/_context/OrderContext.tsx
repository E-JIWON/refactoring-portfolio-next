'use client';

import React, { createContext, ReactNode, useState } from 'react';

/**
 * @desc 주문 옵션을 나타내는 타입
 * 'dine-in'은 매장 식사, 'takeout'은 포장
 */
type OrderOption = 'dine-in' | 'takeout' | null;

/**
 * @desc 주문 컨텍스트 타입
 * orderOption: 현재 선택된 주문 옵션
 * setOrderOption: 주문 옵션을 변경하는 함수
 */
interface OrderContextType {
  orderOption: OrderOption;
  setOrderOption: (option: OrderOption) => void;
}

/**
 * @desc 주문 정보를 공유하기 위한 React 컨텍스트
 * 초기값은 undefined로 설정
 */
export const OrderContext = createContext<OrderContextType | undefined>(undefined);

/**
 * @desc 주문 정보를 제공하는 컴포넌트
 *  *
 * @param {Object} props - 컴포넌트 속성
 * @param {ReactNode} props.children - 자식 컴포넌트들
 */

export const OrderProvider = ({ children }: { children: ReactNode }) => {
  const [orderOption, setOrderOption] = useState<OrderOption>(null);

  // 컨텍스트 제공자를 반환하여 자식 컴포넌트들에게 주문 정보를 제공
  return (
    <OrderContext.Provider value={{ orderOption, setOrderOption }}>
      {children}
    </OrderContext.Provider>
  );
};
