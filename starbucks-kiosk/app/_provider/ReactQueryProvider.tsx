'use client';

import React, { ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const ReactQueryProvider = ({ children }: { children: ReactNode }) => {
  return <QueryClientProvider client={new QueryClient()}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;
