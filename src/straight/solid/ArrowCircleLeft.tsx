import React from 'react';
import type { IconProps } from '../../types';

export const ArrowCircleLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M24,12A12,12,0,1,0,12,24,12.013,12.013,0,0,0,24,12ZM6.586,13.414a2,2,0,0,1,0-2.828l4.243-4.243,1.414,1.414L9,11h9v2H9l3.243,3.243-1.414,1.414Z"/></svg>
);

ArrowCircleLeft.displayName = 'ArrowCircleLeft';
