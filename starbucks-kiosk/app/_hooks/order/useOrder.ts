import { useContext } from 'react';
import { OrderContext } from '@/_context/order/OrderContext';

/**
 * @desc 주문 정보를 사용하기 위한 커스텀 훅 (현재 주문 옵션을 가져오거나 변경)
 *
 * @returns {OrderContextType} 주문 옵션과, 변경하는 함수
 * @throws {Error} OrderProvider 내부에서 사용되지 않았을 경우 에러를 발생
 */
const useOrder = () => {
  const context = useContext(OrderContext);
  if (context === undefined) {
    throw new Error('useOrder must be used within an OrderProvider');
  }
  return context;
};

export default useOrder;
