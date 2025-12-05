import React from 'react';
import type { IconProps } from '../../types';

export const FiBsWaveSine: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m17.5,21c-4.71,0-6.397-6.49-6.952-8.623-.756-2.909-2.072-6.377-4.048-6.377-1.739,0-3.5,2.748-3.5,8H0C0,7.42,2.612,3,6.5,3c4.71,0,6.397,6.49,6.952,8.623.756,2.909,2.072,6.377,4.048,6.377,1.739,0,3.5-2.748,3.5-8h3c0,6.58-2.612,11-6.5,11Z"/></svg>
);

FiBsWaveSine.displayName = 'FiBsWaveSine';
