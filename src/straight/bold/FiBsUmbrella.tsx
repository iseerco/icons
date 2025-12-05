import React from 'react';
import type { IconProps } from '../../types';

export const FiBsUmbrella: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m24 13.5a12.01 12.01 0 0 0 -10.5-11.9v-1.6h-3v1.6a12.01 12.01 0 0 0 -10.5 11.9v1.5h10.5v5.25a.75.75 0 0 1 -1.5 0v-.25h-3v.25a3.75 3.75 0 0 0 7.5 0v-5.25h10.5zm-20.875-1.5a9 9 0 0 1 17.75 0z"/></svg>
);

FiBsUmbrella.displayName = 'FiBsUmbrella';
