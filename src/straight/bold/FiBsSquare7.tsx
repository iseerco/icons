import React from 'react';
import type { IconProps } from '../../types';

export const FiBsSquare7: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M10.849,18.936l-2.659-1.389,4.985-9.547h-5.175v-3h9v2.155l-6.151,11.78ZM24,3.5c0-1.93-1.57-3.5-3.5-3.5H3.5C1.57,0,0,1.57,0,3.5V24H24V3.5ZM3,3.5c0-.276,.224-.5,.5-.5H20.5c.275,0,.5,.224,.5,.5V21H3V3.5Z"/></svg>
);

FiBsSquare7.displayName = 'FiBsSquare7';
