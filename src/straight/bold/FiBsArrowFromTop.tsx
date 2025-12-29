import React from 'react';
import type { IconProps } from '../../types';

export const FiBsArrowFromTop: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_16" data-name="Layer 16" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M16.95,16.052,13.5,19.5V3.005H19v-3H5v3h5.5V19.5l-3.45-3.45L4.929,18.173l4.95,4.951a3,3,0,0,0,4.242,0l4.95-4.95Z"/></svg>
);

FiBsArrowFromTop.displayName = 'FiBsArrowFromTop';
