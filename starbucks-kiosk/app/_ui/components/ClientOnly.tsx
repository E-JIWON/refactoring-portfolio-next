'use client';

import React, { ReactNode, useEffect, useState } from 'react';

const ClientOnly = ({ children, fallback }: { children: ReactNode; fallback?: ReactNode }) => {
  const [isMount, setIsMount] = useState(false);

  useEffect(() => {
    setIsMount(true);
  }, []);

  return <>{isMount ? children : fallback}</>;
};

export default ClientOnly;
