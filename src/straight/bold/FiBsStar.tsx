import React from 'react';
import type { IconProps } from '../../types';

export const FiBsStar: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23,6.987H16.272L14.046.031H9.954L7.728,6.987H1L0,11.454l5.1,3.734-2.533,7.86,4.325.983L12,20.263l5.112,3.768,4.324-.987L18.9,15.188,24,11.454Zm-7.618,7.055,2.1,6.533L12,16.53,6.513,20.575l2.105-6.533L3.094,9.995H9.916L12,3.482l2.084,6.513h6.822Z"/></svg>
);

FiBsStar.displayName = 'FiBsStar';
