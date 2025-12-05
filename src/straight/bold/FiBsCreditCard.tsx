import React from 'react';
import type { IconProps } from '../../types';

export const FiBsCreditCard: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><circle cx="6.5" cy="14.5" r="1.5"/><path d="M21,3H3A3,3,0,0,0,0,6V21H24V6A3,3,0,0,0,21,3Zm0,3V8H3V6ZM3,18V11H21v7Z"/></svg>
);

FiBsCreditCard.displayName = 'FiBsCreditCard';
