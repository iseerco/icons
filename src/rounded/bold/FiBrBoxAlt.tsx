import React from 'react';
import type { IconProps } from '../../types';

export const FiBrBoxAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m18.5 0h-13a5.507 5.507 0 0 0 -5.5 5.5v13a5.507 5.507 0 0 0 5.5 5.5h13a5.507 5.507 0 0 0 5.5-5.5v-13a5.507 5.507 0 0 0 -5.5-5.5zm2.449 5h-4.949v-2h2.5a2.5 2.5 0 0 1 2.449 2zm-9.949-2h2v4a1 1 0 0 1 -2 0zm-5.5 0h2.5v2h-4.949a2.5 2.5 0 0 1 2.449-2zm13 18h-13a2.5 2.5 0 0 1 -2.5-2.5v-10.5h5.142a3.981 3.981 0 0 0 7.716 0h5.142v10.5a2.5 2.5 0 0 1 -2.5 2.5zm.5-3.5a1.5 1.5 0 0 1 -1.5 1.5h-3a1.5 1.5 0 0 1 0-3h3a1.5 1.5 0 0 1 1.5 1.5z"/></svg>
);

FiBrBoxAlt.displayName = 'FiBrBoxAlt';
