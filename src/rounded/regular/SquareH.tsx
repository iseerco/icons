import React from 'react';
import type { IconProps } from '../../types';

export const SquareH: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m19,0H5C2.243,0,0,2.243,0,5v14c0,2.757,2.243,5,5,5h14c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm3,19c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V5c0-1.654,1.346-3,3-3h14c1.654,0,3,1.346,3,3v14Zm-4-13v12c0,.552-.448,1-1,1s-1-.448-1-1v-5h-8v5c0,.552-.448,1-1,1s-1-.448-1-1V6c0-.552.448-1,1-1s1,.448,1,1v5h8v-5c0-.552.448-1,1-1s1,.448,1,1Z"/></svg>
);

SquareH.displayName = 'SquareH';
