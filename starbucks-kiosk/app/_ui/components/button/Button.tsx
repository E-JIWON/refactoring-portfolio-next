import { buttonStyles } from '@/_ui/styles/button';
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'small' | 'medium' | 'large';
  form?: 'primary';
  //   variant?: 'primary' | 'secondary' | 'danger';
  ariaLabel: string;
}

const Button = ({
  children,
  form = 'primary',
  size = 'medium',
  className,
  ...props
}: ButtonProps) => {
  const buttonClass = `${buttonStyles.base} ${buttonStyles.form[form]} ${buttonStyles.size[size]} ${className}`;

  return (
    <button
      className={buttonClass}
      {...props}>
      {children}
    </button>
  );
};

export default Button;
