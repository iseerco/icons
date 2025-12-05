import React from 'react';
import type { IconProps } from '../../types';

export const FiBsArrowFromLeft: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_16" data-name="Layer 16" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M23.12,9.882,18.171,4.931,16.05,7.052,19.5,10.5H3V5H0V19H3V13.5H19.5l-3.449,3.45,2.121,2.121,4.95-4.95A3,3,0,0,0,23.12,9.882Z"/></svg>
);

FiBsArrowFromLeft.displayName = 'FiBsArrowFromLeft';
