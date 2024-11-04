'use client';

import { useModal } from '@/_hooks/useModal';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  children: React.ReactNode;
}

const Modal = ({ children }: ModalProps) => {
  const [mounted, setMounted] = useState(false); // 컴포넌트가 마운트되었는지 확인하는 상태
  const { isOpen, closeModal } = useModal(); //  모달 컨텍스트에서 상태와 함수를 가져옴

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  // modal-root 엘리먼트를 찾음
  const modalRoot = document.getElementById('modal-root');

  // 마운트되지 않았거나, modal-root가 없거나, 모달이 닫혀있으면 아무것도 렌더링하지 않음
  if (!mounted || !modalRoot) return <></>;

  return createPortal(
    <div
      className={`fixed z-30 h-full w-full bg-light-green-deep bg-opacity-55 transition-all duration-100 ease-linear ${isOpen ? 'visible' : 'invisible'}`}
      onClick={closeModal}>
      {/* e.stopPropagation()으로 오버레이 클릭 이벤트가 컨텐츠 영역까지 전파되는 것을 방지 */}
      <div
        className='absolute left-1/2 top-1/2 mx-auto h-4/5 w-3/4 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl bg-light-green-bright p-4'
        onClick={(e) => e.stopPropagation()}>
        {children}
        <button onClick={closeModal}>닫기</button>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
