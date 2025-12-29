import React from 'react';
import type { IconProps } from '../../types';

export const FiBsArrowCircleLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_16" data-name="Layer 16" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,12A12,12,0,1,0,12,24,12.013,12.013,0,0,0,24,12ZM3,12a9,9,0,1,1,9,9A9.011,9.011,0,0,1,3,12Zm10.061,3.889L10.939,18.01,6.7,13.768a2.5,2.5,0,0,1,0-3.536L10.939,5.99l2.122,2.121L10.671,10.5H18v3H10.671Z"/></svg>
);

FiBsArrowCircleLeft.displayName = 'FiBsArrowCircleLeft';
