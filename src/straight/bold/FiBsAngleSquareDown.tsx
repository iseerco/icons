import React from 'react';
import type { IconProps } from '../../types';

export const FiBsAngleSquareDown: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_16" data-name="Layer 16" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,24H0V3.5A3.5,3.5,0,0,1,3.5,0h17A3.5,3.5,0,0,1,24,3.5ZM3,21H21V3.5a.5.5,0,0,0-.5-.5H3.5a.5.5,0,0,0-.5.5Zm10.768-5.732,4.25-4.25L15.9,8.9l-3.9,3.9L8.1,8.9,5.982,11.018l4.25,4.25a2.5,2.5,0,0,0,3.536,0Z"/></svg>
);

FiBsAngleSquareDown.displayName = 'FiBsAngleSquareDown';
