import { ModalContext } from '@/_provider/ModalContext';
import { useContext } from 'react';

export const useModal = () => {
  const context = useContext(ModalContext);

  // Provider 내부에서만 사용할 수 있도록 체크
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
