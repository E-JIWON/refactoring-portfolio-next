import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
   children?: string;
   size?: 'small' | 'medium' | 'large';
   form?: 'primary';
   //   variant?: 'primary' | 'secondary' | 'danger';
   className?: string;
   ariaLabel: string;
}

export const buttonStyles = {
   base: 'font-bold rounded focus:outline-none focus:ring',
   form: {
      primary:
         'py-2 px-4 bg-light-green-light text-light-white-light rounded-xl font-semibold',
      // secondary: 'bg-light-secondary dark:bg-dark-secondary text-white hover:bg-gray-700',
      // danger: 'bg-red-500 dark:bg-dark-primary text-white hover:bg-red-700',
   },
   size: {
      small: 'px-2 py-1 text-sm',
      medium: 'px-4 py-2 text-base',
      large: 'px-6 py-3 text-lg',
   },
};

const Button = ({
   children,
   type = 'button',
   form = 'primary',
   size = 'medium',
   disabled,
   onClick,
   className,
   ariaLabel = 'button',
}: ButtonProps) => {
   const buttonClass = `${buttonStyles.base} ${buttonStyles.form[form]} ${buttonStyles.size[size]} ${className}`;
   return (
      <button
         type={type}
         aria-label={ariaLabel}
         className={buttonClass}
         disabled={disabled}
         onClick={onClick}
      >
         {children}
      </button>
   );
};

export default Button;
