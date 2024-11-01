import React from 'react';

interface ResultButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  ariaLabel: string;
}

const ResultButton = ({ ...props }: ResultButtonProps) => {
  const { ariaLabel, children } = props;
  return (
    <button
      className='h-1/2 w-48 rounded-xl border-4 border-solid border-light-green-bright text-4xl font-semibold transition-colors duration-200 hover:bg-light-green-bright hover:text-light-green-deep'
      aria-label={ariaLabel}>
      {children}
    </button>
  );
};

export default ResultButton;
