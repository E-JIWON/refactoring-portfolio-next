import React from 'react';
import ThemeProvider from './ThemeProvider';
import ReactQueryProvider from './ReactQueryProvider';
import { ModalProvider } from './ModalContext';
import { OrderProvider } from '@/_context/OrderContext';

interface CombinedProviderProps {
  children: React.ReactNode;
}

const CombinedProvider = ({ children }: CombinedProviderProps) => {
  return (
    <ThemeProvider>
      <ReactQueryProvider>
        <ModalProvider>
          <OrderProvider>{children}</OrderProvider>
        </ModalProvider>
      </ReactQueryProvider>
    </ThemeProvider>
  );
};

export default CombinedProvider;
