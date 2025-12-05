import React from 'react';
import type { IconProps } from '../../types';

export const FiBrArrowToRight: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,6.28v3L16.932,5.209a1.5,1.5,0,1,0-2.121,2.122L18,10.515H1.5a1.5,1.5,0,0,0,0,3H18L14.811,16.7a1.5,1.5,0,0,0,2.121,2.121L21,14.753v3a1.5,1.5,0,0,0,3,0V6.28a1.5,1.5,0,0,0-3,0Z"/></svg>
);

FiBrArrowToRight.displayName = 'FiBrArrowToRight';
