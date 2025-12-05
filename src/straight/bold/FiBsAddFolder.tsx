import React from 'react';
import type { IconProps } from '../../types';

export const FiBsAddFolder: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m13.5 12.5h2.5v3h-2.5v2.5h-3v-2.5h-2.5v-3h2.5v-2.5h3zm10.5-6.5v17h-24v-19a3 3 0 0 1 3-3h5.354l4 2h8.646a3 3 0 0 1 3 3zm-3 14v-12h-18v12z"/></svg>
);

FiBsAddFolder.displayName = 'FiBsAddFolder';
