import React from 'react';
import type { IconProps } from '../../types';

export const FiBrTimeOclock: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m12 0a12 12 0 1 0 12 12 12.013 12.013 0 0 0 -12-12zm0 21a9 9 0 1 1 9-9 9.01 9.01 0 0 1 -9 9zm1.5-10.31a2 2 0 1 1 -3 0v-4.19a1.5 1.5 0 0 1 3 0z"/></svg>
);

FiBrTimeOclock.displayName = 'FiBrTimeOclock';
