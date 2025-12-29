import React from 'react';
import type { IconProps } from '../../types';

export const FiBsFolderMinus: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M8,12.5h8v3H8v-3ZM24,6.5V23H0V4.5C0,2.57,1.57,1,3.5,1h4.854l4,2h8.146c1.93,0,3.5,1.57,3.5,3.5Zm-3,13.5V8H3v12H21Z"/></svg>
);

FiBsFolderMinus.displayName = 'FiBsFolderMinus';
