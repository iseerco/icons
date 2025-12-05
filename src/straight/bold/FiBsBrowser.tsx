import React from 'react';
import type { IconProps } from '../../types';

export const FiBsBrowser: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m19 13h-14v-3h14zm-4 2h-10v3h10zm9-10.5v18.5h-24v-18.5a3.5 3.5 0 0 1 3.5-3.5h17a3.5 3.5 0 0 1 3.5 3.5zm-16 0a1.5 1.5 0 1 0 1.5-1.5 1.5 1.5 0 0 0 -1.5 1.5zm-3.5 1.5a1.5 1.5 0 1 0 -1.5-1.5 1.5 1.5 0 0 0 1.5 1.5zm16.5 2h-18v12h18z"/></svg>
);

FiBsBrowser.displayName = 'FiBsBrowser';
