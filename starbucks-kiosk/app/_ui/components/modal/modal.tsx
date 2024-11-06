'use client';

import React from 'react';
import { useModal } from '@/_hooks/useModal';
import { createPortal } from 'react-dom';

interface ModalProps {
  children: React.ReactNode;
  // 추가 버튼에 대한 설정을 선택적으로 받음
  additionalButton?: {
    text: string;
    onClick: () => void;
    className?: string;
  };
}

const Modal = ({ children, additionalButton }: ModalProps) => {
  const { isOpen, closeModal } = useModal(); //  모달 컨텍스트에서 상태와 함수를 가져옴

  // modal-root 엘리먼트를 찾음
  const modalRoot = document.getElementById('modal-root');

  // 마운트되지 않았거나, modal-root가 없거나, 모달이 닫혀있으면 아무것도 렌더링하지 않음
  if (!modalRoot) return <></>;

  return createPortal(
    <div
      className={`fixed z-30 h-full w-full bg-light-green-deep bg-opacity-55 text-light-white-light transition-all duration-100 ease-linear ${isOpen ? 'visible' : 'invisible'}`}
      onClick={closeModal}>
      {/* e.stopPropagation()으로 오버레이 클릭 이벤트가 컨텐츠 영역까지 전파되는 것을 방지 */}
      <div
        className='absolute left-1/2 top-1/2 mx-auto h-4/5 w-7/12 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-2xl bg-light-green-dark'
        onClick={(e) => e.stopPropagation()}>
        {children}
        <div className='h-20'>
          <button
            onClick={closeModal}
            className={`h-full font-semibold text-light-white-light transition-colors ease-in hover:bg-light-green-bright ${additionalButton ? 'w-1/2' : 'w-full'}`}>
            닫기
          </button>
          {/* 추가 버튼이 있는 경우에만 렌더링 */}
          {additionalButton && (
            <button
              onClick={additionalButton.onClick}
              className={`rounded px-4 py-2 ${additionalButton.className || 'bg-blue-500 text-white'}`}>
              {additionalButton.text}
            </button>
          )}
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
