import React from 'react';
import type { IconProps } from '../../types';

export const Copy: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m20 20h-20v-17a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3zm-18-2h16v-15a1 1 0 0 0 -1-1h-14a1 1 0 0 0 -1 1zm20-13.816v17.816h-18v2h20v-17a3 3 0 0 0 -2-2.816z"/></svg>
);

Copy.displayName = 'Copy';
