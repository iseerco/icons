import React from 'react';
import type { IconProps } from '../../types';

export const Y: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><polygon points="22.041 0 19.559 0 12 10.308 4.441 0 1.959 0 11 12.328 11 24 13 24 13 12.328 22.041 0"/></svg>
);

Y.displayName = 'Y';
