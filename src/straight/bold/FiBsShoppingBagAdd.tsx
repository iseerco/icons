import React from 'react';
import type { IconProps } from '../../types';

export const FiBsShoppingBagAdd: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18,6A6,6,0,0,0,6,6H0V21a3,3,0,0,0,3,3h9V21H3V9H6v2H9V9h6v2h3V9h3v4h3V6ZM9,6a3,3,0,0,1,6,0Z"/><polygon points="21 15 18 15 18 18 15 18 15 21 18 21 18 24 20.5 24 21 24 21 21 24 21 24 20.5 24 18 21 18 21 15"/></svg>
);

FiBsShoppingBagAdd.displayName = 'FiBsShoppingBagAdd';
