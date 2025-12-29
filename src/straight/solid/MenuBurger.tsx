import React from 'react';
import type { IconProps } from '../../types';

export const MenuBurger: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><rect y="11" width={size} height={size}/><rect y="4" width={size} height={size}/><rect y="18" width={size} height={size}/></svg>
);

MenuBurger.displayName = 'MenuBurger';
