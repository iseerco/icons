import React from 'react';
import type { IconProps } from '../../types';

export const One: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><polygon points="14 24 12 24 12 3.276 6.438 8.995 5.004 7.601 12.396 0 14 0 14 24"/></svg>
);

One.displayName = 'One';
