import React from 'react';
import type { IconProps } from '../../types';

export const ShoppingBagAdd: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Filled" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,6H18A6,6,0,0,0,6,6H3A3,3,0,0,0,0,9V19a5.006,5.006,0,0,0,5,5H16.686A6,6,0,1,1,24,14.537V9A3,3,0,0,0,21,6ZM8,6a4,4,0,0,1,8,0Z"/><path d="M23,18H21V16a1,1,0,0,0-2,0v2H17a1,1,0,0,0,0,2h2v2a1,1,0,0,0,2,0V20h2a1,1,0,0,0,0-2Z"/></svg>
);

ShoppingBagAdd.displayName = 'ShoppingBagAdd';
