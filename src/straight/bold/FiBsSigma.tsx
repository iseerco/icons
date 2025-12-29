import React from 'react';
import type { IconProps } from '../../types';

export const FiBsSigma: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="m18.5,24H2v-2.599l8.931-9.401L2,2.599V0h16.5c1.93,0,3.5,1.57,3.5,3.5v1.5h-3v-1.5c0-.276-.225-.5-.5-.5H6.519l8.551,9-8.551,9h11.981c.275,0,.5-.224.5-.5v-1.5h3v1.5c0,1.93-1.57,3.5-3.5,3.5Z"/></svg>
);

FiBsSigma.displayName = 'FiBsSigma';
