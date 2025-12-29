import React from 'react';
import type { IconProps } from '../../types';

export const FiBrGridAlt: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} id="Layer_1" height={size} viewBox="0 0 24 24" width={size} xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" {...props}><path d="m18.5 0h-13a5.506 5.506 0 0 0 -5.5 5.5v13a5.506 5.506 0 0 0 5.5 5.5h13a5.506 5.506 0 0 0 5.5-5.5v-13a5.506 5.506 0 0 0 -5.5-5.5zm-8.5 14v-4h4v4zm4 3v4h-4v-4zm-11-7h4v4h-4zm7-3v-4h4v4zm7 3h4v4h-4zm4-4.5v1.5h-4v-4h1.5a2.5 2.5 0 0 1 2.5 2.5zm-15.5-2.5h1.5v4h-4v-1.5a2.5 2.5 0 0 1 2.5-2.5zm-2.5 15.5v-1.5h4v4h-1.5a2.5 2.5 0 0 1 -2.5-2.5zm15.5 2.5h-1.5v-4h4v1.5a2.5 2.5 0 0 1 -2.5 2.5z"/></svg>
);

FiBrGridAlt.displayName = 'FiBrGridAlt';
