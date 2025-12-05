import React from 'react';
import type { IconProps } from '../../types';

export const Package: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m24 11v12a1 1 0 0 1 -2 0v-5h-20v5a1 1 0 0 1 -2 0v-10.5a5.5 5.5 0 0 1 11 0v3.5h3v-5a3 3 0 0 1 3-3h1v2a1 1 0 0 0 2 0v-2h1a3 3 0 0 1 3 3zm-15-7.5a3.5 3.5 0 1 0 -3.5 3.5 3.5 3.5 0 0 0 3.5-3.5z"/></svg>
);

Package.displayName = 'Package';
