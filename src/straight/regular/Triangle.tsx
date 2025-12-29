import React from 'react';
import type { IconProps } from '../../types';

export const Triangle: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,21H0L10.264,3.223a2,2,0,0,1,3.472,0ZM3.471,19H20.529L12,4.229h0Z"/></svg>
);

Triangle.displayName = 'Triangle';
