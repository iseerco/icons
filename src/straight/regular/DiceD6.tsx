import React from 'react';
import type { IconProps } from '../../types';

export const DiceD6: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M13.543.428a2.989,2.989,0,0,0-3.086,0L1,6.1V17.9l9.457,5.674a2.991,2.991,0,0,0,3.087,0L23,17.9V6.1ZM11.485,2.143a1,1,0,0,1,1.03,0l7.541,4.525L12,11.5,3.944,6.668ZM3,16.766V8.434l8,4.8v8.332Zm10,4.8V13.234l8-4.8v8.332Z"/></svg>
);

DiceD6.displayName = 'DiceD6';
