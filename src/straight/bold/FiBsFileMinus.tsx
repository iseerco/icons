import React from 'react';
import type { IconProps } from '../../types';

export const FiBsFileMinus: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m16.381,0H5c-1.654,0-3,1.346-3,3v21h20V5.665L16.381,0ZM5,21V3h9v5h5v13H5Zm3-8h8v3h-8v-3Z"/></svg>
);

FiBsFileMinus.displayName = 'FiBsFileMinus';
