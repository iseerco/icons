import React from 'react';
import type { IconProps } from '../../types';

export const RectangleVertical: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M16,24H8c-2.76,0-5-2.24-5-5V5C3,2.24,5.24,0,8,0h8c2.76,0,5,2.24,5,5v14c0,2.76-2.24,5-5,5ZM8,2c-1.65,0-3,1.35-3,3v14c0,1.65,1.35,3,3,3h8c1.65,0,3-1.35,3-3V5c0-1.65-1.35-3-3-3H8Z"/></svg>
);

RectangleVertical.displayName = 'RectangleVertical';
