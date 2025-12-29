import React from 'react';
import type { IconProps } from '../../types';

export const FiBrArrowToLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M3,17.75v-3l4.068,4.069A1.5,1.5,0,0,0,9.189,16.7L6.005,13.515H22.5a1.5,1.5,0,0,0,0-3H6.005L9.189,7.331A1.5,1.5,0,0,0,7.068,5.209L3,9.277v-3a1.5,1.5,0,0,0-3,0V17.75a1.5,1.5,0,0,0,3,0Z"/></svg>
);

FiBrArrowToLeft.displayName = 'FiBrArrowToLeft';
