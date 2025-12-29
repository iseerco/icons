import React from 'react';
import type { IconProps } from '../../types';

export const RectangleXmark: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,2H3C1.346,2,0,3.346,0,5V22H24V5c0-1.654-1.346-3-3-3Zm-4.543,13.043l-1.414,1.414-3.043-3.043-3.043,3.043-1.414-1.414,3.043-3.043-3.043-3.043,1.414-1.414,3.043,3.043,3.043-3.043,1.414,1.414-3.043,3.043,3.043,3.043Z"/></svg>
);

RectangleXmark.displayName = 'RectangleXmark';
