import React from 'react';
import type { IconProps } from '../../types';

export const FiTsH4: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m11,4h1v16h-1v-7.5H1v7.5H0V4h1v7.5h10v-7.5Zm12,0v10h-6.5c-.827,0-1.5-.673-1.5-1.5V4h-1v8.5c0,1.379,1.121,2.5,2.5,2.5h6.5v5h1V4h-1Z"/></svg>
);

FiTsH4.displayName = 'FiTsH4';
