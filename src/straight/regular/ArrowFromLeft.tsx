import React from 'react';
import type { IconProps } from '../../types';

export const ArrowFromLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="arrow-circle-down" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23.268,10.232l-4.95-4.949L16.9,6.7l4.3,4.3H2V5H0V19H2V13H21.207l-4.3,4.3,1.414,1.414,4.95-4.949a2.5,2.5,0,0,0,0-3.536Z"/></svg>
);

ArrowFromLeft.displayName = 'ArrowFromLeft';
