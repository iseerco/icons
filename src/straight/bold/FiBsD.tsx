import React from 'react';
import type { IconProps } from '../../types';

export const FiBsD: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M11.5,24H5.5c-1.93,0-3.5-1.57-3.5-3.5V3.5C2,1.57,3.57,0,5.5,0h6c5.79,0,10.5,4.71,10.5,10.5v3c0,5.79-4.71,10.5-10.5,10.5ZM5.5,3c-.275,0-.5,.224-.5,.5V20.5c0,.276,.225,.5,.5,.5h6c4.136,0,7.5-3.364,7.5-7.5v-3c0-4.136-3.364-7.5-7.5-7.5H5.5Z"/></svg>
);

FiBsD.displayName = 'FiBsD';
