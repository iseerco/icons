import React from 'react';
import type { IconProps } from '../../types';

export const FiBsBurgerAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23,12H1v-1.5C1,4.51,5.73,0,12,0s10.99,4.51,11,10.5v1.5ZM4.15,9h15.71c-.69-3.55-3.78-6-7.86-6s-7.15,2.49-7.85,6Zm18.85,5H1v3H23v-3Zm-4.5,10H5.5c-2.48,0-4.5-2.02-4.5-4.5v-.5H23v.5c0,2.48-2.02,4.5-4.5,4.5Z"/></svg>
);

FiBsBurgerAlt.displayName = 'FiBsBurgerAlt';
