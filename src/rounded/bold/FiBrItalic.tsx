import React from 'react';
import type { IconProps } from '../../types';

export const FiBrItalic: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Bold" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,0H6A1.5,1.5,0,0,0,6,3h5.713L9.259,21H3a1.5,1.5,0,0,0,0,3H18a1.5,1.5,0,0,0,0-3H12.287L14.741,3H21a1.5,1.5,0,0,0,0-3Z"/></svg>
);

FiBrItalic.displayName = 'FiBrItalic';
