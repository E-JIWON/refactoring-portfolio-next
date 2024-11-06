export enum ModalType {
  MENU_OPTION = 'MENU_OPTION', // 메뉴 옵션 모달
}

export interface ModalProps {
  children?: React.ReactNode;
}

// 모달 상태 타입 정의
export interface ModalState {
  type: ModalType | null;
}
