'use client';

import { FC, ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

const Button: FC<ButtonProps> = ({ children, className, appName }) => (
  <button
    type="button"
    className={className}
    onClick={() => console.log(`Hello from your ${appName} app!`)}
  >
    {children}
  </button>
);

export default Button;
