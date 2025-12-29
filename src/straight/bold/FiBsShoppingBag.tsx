import React from 'react';
import type { IconProps } from '../../types';

export const FiBsShoppingBag: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18,6A6,6,0,0,0,6,6H0V21a3,3,0,0,0,3,3H21a3,3,0,0,0,3-3V6ZM12,3a3,3,0,0,1,3,3H9A3,3,0,0,1,12,3Zm9,18H3V9H6v2H9V9h6v2h3V9h3Z"/></svg>
);

FiBsShoppingBag.displayName = 'FiBsShoppingBag';
