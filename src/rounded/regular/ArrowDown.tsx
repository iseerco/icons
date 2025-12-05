import React from 'react';
import type { IconProps } from '../../types';

export const ArrowDown: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18.05,17.79a1,1,0,0,0-1.42,0L13,21.42V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V21.41L7.38,17.79A1,1,0,1,0,6,19.2l3.92,3.92a3,3,0,0,0,4.24,0l3.92-3.92A1,1,0,0,0,18.05,17.79Z"/></svg>
);

ArrowDown.displayName = 'ArrowDown';
