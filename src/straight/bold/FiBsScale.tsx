import React from 'react';
import type { IconProps } from '../../types';

export const FiBsScale: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m20.5 2h-4.04a5.973 5.973 0 0 0 -8.92 0h-4.04a3.5 3.5 0 0 0 -3.5 3.5v18.5h24v-18.5a3.5 3.5 0 0 0 -3.5-3.5zm.5 19h-18v-15.5a.5.5 0 0 1 .5-.5h2.59a6 6 0 0 0 -.09 1v2h3.291l2.427-5 2.682 1.342-1.7 3.658h5.3v-2a6 6 0 0 0 -.09-1h2.59a.5.5 0 0 1 .5.5z"/></svg>
);

FiBsScale.displayName = 'FiBsScale';
