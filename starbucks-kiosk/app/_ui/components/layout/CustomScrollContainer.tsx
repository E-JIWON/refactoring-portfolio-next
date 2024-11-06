import React from 'react';

const CustomScrollContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string | undefined;
}) => {
  return (
    <div
      className={`overflow-y-scroll pr-4 [&::-webkit-scrollbar-thumb]:rounded-lg [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-[#001e1e] [&::-webkit-scrollbar-thumb]:bg-[#36544d] [&::-webkit-scrollbar-track]:rounded-lg [&::-webkit-scrollbar-track]:bg-[#001e1e] [&::-webkit-scrollbar]:w-2 ${className}`}>
      {children}
    </div>
  );
};

export default CustomScrollContainer;
