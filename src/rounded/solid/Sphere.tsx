import React from 'react';
import type { IconProps } from '../../types';

export const Sphere: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,6c6.841,0,12,2.579,12,6A12,12,0,0,0,0,12C0,8.579,5.159,6,12,6Z"/><ellipse cx="12" cy="12" rx="10" ry="4"/><path d="M12,18C5.159,18,0,15.421,0,12a12,12,0,0,0,24,0C24,15.421,18.841,18,12,18Z"/></svg>
);

Sphere.displayName = 'Sphere';
