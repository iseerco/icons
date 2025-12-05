import React from 'react';
import type { IconProps } from '../../types';

export const RotateRight: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M22,12a10,10,0,1,1-2.86-7H15V7h5.143A1.859,1.859,0,0,0,22,5.143V0H20V3.06A12,12,0,1,0,24,12Z"/></svg>
);

RotateRight.displayName = 'RotateRight';
