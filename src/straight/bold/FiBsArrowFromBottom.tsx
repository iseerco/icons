import React from 'react';
import type { IconProps } from '../../types';

export const FiBsArrowFromBottom: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M13.5,4.5l3.45,3.449,2.121-2.121L14.121.883a3,3,0,0,0-4.242,0L4.929,5.832,7.05,7.953,10.5,4.5V21H5v3H19V21H13.5Z"/></svg>
);

FiBsArrowFromBottom.displayName = 'FiBsArrowFromBottom';
