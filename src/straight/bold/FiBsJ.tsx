import React from 'react';
import type { IconProps } from '../../types';

export const FiBsJ: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M18.5,24H5.5c-1.93,0-3.5-1.57-3.5-3.5v-3.5h3v3.5c0,.276,.225,.5,.5,.5h13c.275,0,.5-.224,.5-.5V0h3V20.5c0,1.93-1.57,3.5-3.5,3.5Z"/></svg>
);

FiBsJ.displayName = 'FiBsJ';
