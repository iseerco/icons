import React from 'react';
import type { IconProps } from '../../types';

export const FiBrAlignCenter: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M1.5,6h21a1.5,1.5,0,0,0,0-3H1.5a1.5,1.5,0,0,0,0,3Z"/><path d="M5.5,8a1.5,1.5,0,0,0,0,3h13a1.5,1.5,0,0,0,0-3Z"/><path d="M18.5,18H5.5a1.5,1.5,0,0,0,0,3h13a1.5,1.5,0,0,0,0-3Z"/><path d="M22.5,13H1.5a1.5,1.5,0,0,0,0,3h21a1.5,1.5,0,0,0,0-3Z"/></svg>
);

FiBrAlignCenter.displayName = 'FiBrAlignCenter';
