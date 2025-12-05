import React from 'react';
import type { IconProps } from '../../types';

export const FiBrArrowToTop: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M6.265,3.015h3L5.194,7.083A1.5,1.5,0,0,0,7.315,9.205L10.5,6.02v16.5a1.5,1.5,0,0,0,3,0V6.02l3.185,3.185a1.5,1.5,0,1,0,2.121-2.122L14.738,3.015h3a1.5,1.5,0,0,0,0-3H6.265a1.5,1.5,0,0,0,0,3Z"/></svg>
);

FiBrArrowToTop.displayName = 'FiBrArrowToTop';
