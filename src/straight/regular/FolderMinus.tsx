import React from 'react';
import type { IconProps } from '../../types';

export const FolderMinus: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M8,14h8v2H8v-2ZM24,6V23H0V4C0,2.346,1.346,1,3,1h5.236l4,2h8.764c1.654,0,3,1.346,3,3ZM2,4v3H22v-1c0-.552-.448-1-1-1H11.764L7.764,3H3c-.552,0-1,.448-1,1ZM22,21V9H2v12H22Z"/></svg>
);

FolderMinus.displayName = 'FolderMinus';
