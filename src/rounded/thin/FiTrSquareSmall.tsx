import React from 'react';
import type { IconProps } from '../../types';

export const FiTrSquareSmall: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M15,19h-6c-2.21,0-4-1.79-4-4v-6c0-2.21,1.79-4,4-4h6c2.21,0,4,1.79,4,4v6c0,2.21-1.79,4-4,4ZM9,6c-1.65,0-3,1.35-3,3v6c0,1.65,1.35,3,3,3h6c1.65,0,3-1.35,3-3v-6c0-1.65-1.35-3-3-3h-6Z"/></svg>
);

FiTrSquareSmall.displayName = 'FiTrSquareSmall';
