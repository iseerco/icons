import React from 'react';
import type { IconProps } from '../../types';

export const L: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M21,24H7c-2.757,0-5-2.243-5-5V1c.006-1.308,1.994-1.307,2,0V19c0,1.654,1.346,3,3,3h14c1.308,.006,1.307,1.995,0,2Z"/></svg>
);

L.displayName = 'L';
