import React from 'react';
import type { IconProps } from '../../types';

export const ArrowUpLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23.957,22.543L3.414,2H14V0H2C.897,0,0,.897,0,2V14H2V3.414L22.543,23.957l1.414-1.414Z"/></svg>
);

ArrowUpLeft.displayName = 'ArrowUpLeft';
