import React from 'react';
import type { IconProps } from '../../types';

export const FiTsMailbox: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18,3H6C2.691,3,0,5.691,0,9v12H24V9c0-3.309-2.691-6-6-6Zm-7,17H1V9c0-2.757,2.243-5,5-5s5,2.243,5,5v11Zm12,0H12V9c0-2.085-1.069-3.924-2.687-5h8.687c2.757,0,5,2.243,5,5v11ZM14,10h6v4h-1v-3h-5v-1Zm-10,0h4v1H4v-1Z"/></svg>
);

FiTsMailbox.displayName = 'FiTsMailbox';
