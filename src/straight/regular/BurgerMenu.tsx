import React from 'react';
import type { IconProps } from '../../types';

export const BurgerMenu: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size} {...props}><g id="_01_align_center" data-name="01 align center"><rect y="11" width={size} height={size}/><rect y="4" width={size} height={size}/><rect y="18" width={size} height={size}/></g></svg>
);

BurgerMenu.displayName = 'BurgerMenu';
