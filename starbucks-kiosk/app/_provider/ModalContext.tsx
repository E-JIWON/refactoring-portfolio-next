'use client';

import React, { createContext, useState, ReactNode } from 'react';

interface ModalContextType {
  isOpen: boolean; // 모달의 열림/닫힘 상태
  openModal: () => void; // 모달을 여는 함수
  closeModal: () => void; // 모달을 닫는 함수
}

export const ModalContext = createContext<ModalContextType | undefined>(undefined);

interface ModalProviderProps {
  children: ReactNode;
}

/** @desc 모달 Provider */
export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState(false); // 모달의 열림/닫힘 상태

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  // Provider를 통해 자식 컴포넌트들에게 상태와 함수들을 전달
  return (
    <ModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};
